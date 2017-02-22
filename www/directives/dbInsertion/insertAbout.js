app.directive('insertAbout', [function(){

  return {
    controller: ['$scope','About' ,'$interval', function($scope, About, $interval) {
      
      About.get(function(x){
        if(x.length)return;
        About.create([
          {

          "title": "Om Dyhr & Rumson",
          "content": "En ny källarförråd öppnar i helgen i Lund, Dyhr & Rumson Grundaren Johan Ranefors, mer känd som Big Black Clock, valde att inte hoppa på någon av de befintliga kedjorna när det blev klart att han var beredd att ta steget att gå vidare i karriären och lämna Glimworks källarförrådet bakom sig. Istället valde han att gå sin egen väg och grunda Dyhr & Rumson. Dyhr & Rumson grundades under våren 2014 och är Lundmarknadens nyaste tillskott av källarförråd. Förrådet är oberoende och fristående från landets kedjor. Grundaren heter Johan Ranefors och är känd som etablerad mäklare med en e-sportslig karriär som pokemonsamlare i hans lilla källarförrådet.",
          "img": "imgs/about/bild1.jpg",
          "imgs": "imgs/about/bild2.jpg",
          "contents": "Mäklarhuset är idag Sveriges största privatägda mäklarkedja med cirka 120 kontor över hela landet. Du kan förvänta dig kunniga och engagerade medarbetare som verkligen vill att din bostadsaffär ska bli en positiv upplevelse genom hela processen. Mäklarhuset grundades 1973 i Göteborg och fokus från starten låg på att förmedla bostäder i Göteborg med omnejd. 1998 utvecklades Mäklarhuset till en rikstäckande kedja av fristående lokala mäklarkontor. Idag är vi 550 engagerade medarbetare på 120 kontor över hela Sverige. Vi har legat i toppen av SKI:s (Svenskt Kvalitetsindex) mätningar.",
          "titles": "Vår Vision"
          
          }
        ]);
      });
    }]
  };
}]);