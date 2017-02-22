(function(){var mongresto={
ngInit: function(){
    // Extend RegExp for json serialization
    RegExp.prototype.toJSON = function(){
      return "~regexpstart~"+this+"~regexpend~";
    };

    // Important global props
    this.stopQueueOnError = false;
    this.queue = [];
    this.busy = false;
    this.callOnNoQueue = [];

    // Create resources
    var that = this;
    ["About","Contact","Home","Seller"].forEach(function(x){that.ngCreateResource(x);});
  },

  ngMethods: function(){
    // Define ngResource methods
    return {
      get: { method: 'GET', isArray: true },
      getById: { method: 'GET', isArray: false },
      create: { method: 'POST', isArray: true},
      update: { method: 'PUT' },
      remove: { method: 'DELETE' }
    };
  },

  ngCreateResource: function(entity){
    var that = this, methods = this.ngMethods();
    app.factory(entity, ["$resource", function ($resource) {

      // Create an ng resource
      var re = $resource(
        "/api/" + entity.toLowerCase() + "/:id/",
        {id:"@id"}, methods
      );
      
      // Wrap it in our own special object (queue handling etc)
      var obj = {
        onQueueDone: function(func){
          typeof func == "function" && that.callOnNoQueue.push(func);
        }
      };
      for(var i in methods){that.ngCreateMethod(re,obj,methods,i);}
      
      return obj;
    }]);
  },

  ngCreateMethod: function(re,obj,methods,methodName){

    var that = this, methodSpec = methods[methodName];

    // Create a method
    obj[methodName] = function(){

      // On a call to the method preprocess the arguments
      args = that.ngPreprocessArguments(arguments,methodName, methodSpec);
      var orgArgs = args[0];
      args = args[1];

      // Create an empty result to fill later
      var result = methodSpec.isArray ? [] : {};

      // Push to queue
      that.queue.push({
        re:re, orgArgs: orgArgs, args:args,
        methodName:methodName, methodSpec:methodSpec,
        result:result
      });
      // Run queue if not busy
      if(!that.busy){that.ngRunQueue();}

      // Return the result
      return result;
    };

  },

  ngPreprocessArguments: function(args, methodName, methodSpec){
    // Preprocesses arguments to different methods
    args = Array.prototype.slice.call(args);
    var orgArgs = [].concat(args);
    // One argument less than ng standard for create
    if(methodName == "create"){args.unshift({});}
    // Strings are ids
    if(typeof args[0] == "string"){args[0] = {_id:args[0]};}
    // Ask backend to sometimes force arrays to avoid ng errors
    var onlyId = true;
    for(var i in args[0]){
      if(i == "_id" || i == "_populate"){continue;}
      onlyId = false;
    }
    if(args[0] && onlyId && methodSpec.isArray){
      args[0].__forceArray = true;
    }
    
    // Stringify search object
    if(typeof args[0] == "object" && !args[0].id){
      args[0] = {
        id:JSON.stringify(args[0])
        .replace(/"~regexpstart~/g,'')
        .replace(/~regexpend~"/g,'')
      };
    }

    return [orgArgs, args];
  },

  ngRunQueue: function(){
    // Read from queue
    this.busy = true;
    var r = this.queue.shift(), that = this;
    // Add a callback function to run when the results are back
    var orgCallback = typeof r.args[r.args.length-1] == "function" && r.args.pop();
    var newCallback = function(){
      var i, isArr = r.result.push;
      // Transfer result to waiting array or object
      if(isArr){for(i = 0; i < result.length; i++){r.result.push(result[i]);}}
      else {for(i in result){r.result[i] = result[i];}}
      var oldLength = that.queue.length;
      orgCallback && orgCallback.apply(r.re,arguments);
      // Reorganize queue for more syncronous feel
      // if we are called in a callback
      var moveFirst = [];
      while(that.queue.length > oldLength){moveFirst.push(that.queue.pop());}
      while(moveFirst.length){that.queue.unshift(moveFirst.shift());}
      // We are done - run next item in queue?
      that.busy = false;
      that.queue.length && that.ngRunQueue();
      // The queue is empty and the last result is back
      if(!that.queue.length && !that.busy){
        while(that.callOnNoQueue.length){that.callOnNoQueue.shift()();}
      }
    };
    if(this.stopQueueOnError){r.args.push(newCallback);}
    else {r.args.push(newCallback, newCallback);}
    // Call ngResource object
    this.ngHandleRelate(r);
    var result = r.re[r.methodName].apply(r.re,r.args);
  },

  ngHandleRelate: function(r){
    // Check if we need to handle update _relate actions
    if(
      r.methodName != "update" ||
      !r.orgArgs[0] ||
      !r.orgArgs[0]._relate
    ){
      return;
    }
    
    // Rebuild the search object from the _relate object
    var u = r.orgArgs[0]._relate;
    var obj = {};
    for(var i in u){
      obj[i] = obj[i] || [];
      u[i] = u[i].push ? u[i] : [u[i]];
      for(var j = 0; j < u[i].length; j++){
        u[i][j]._id && obj[i].push(u[i][j]._id);
      }
    }
    
    // Add ids to look for to request body
    if(obj.items){
      obj.__idsToLookFor__ = obj.items;
      delete obj.items;
      r.args[0] = {id: '{_relate:true}'};
      r.args.splice(1,0, obj);
    }
  }
};
mongresto.ngInit();})()