app.directive('insertObject', [function(){

  return {
    controller: ['$scope','Home' ,'Seller', function($scope, Home, Seller) {

      //array of possible adresses
      var adresses = [
            'Hammarvägen 95', 
            'kärpinge 84', 
            'Gökst 4', 
            'Luddingsbo Mekanikusv 11',
            'Sandlyckan 59',
            'Messlingen 26',
            'Skolspåret 39',
            'Anders Sadelmakares Gränd 57',
            'Barkargatan 39',
            'Kaptensgränd 71',
            'Kanotorsvägen 29',
            'Hagagatan 24',
            'Klubbvägen 58',
            'LoftaHeden 86',
            'Dyvik 32',
            'Gamla Svedalavägen 12',
            'Djursbo 20',
            'Löberöd 69',
            'Nittsjö Kvarngatu 5',
            'Överhogdal 39',
            'Vansövägen 81',
            'Kantorsvägen 10',
            'Bottna Knutsgård 97',
            'Lillesäter 59'
          ],

          //array of possible show days
          showDays =[
            {
              day: 1,
              month: 5,
              hour: 18,
              minutes: 00,
              open: true
            },
            {
              day: 8,
              month: 5,
              hour: 18,
              minutes: 30,
              open: true
            },
            {
              day: 15,
              month: 5,
              hour: 18,
              minutes: 00,
              open: true
            },
            {
              day: 22,
              month: 5,
              hour: 19,
              minutes: 00,
              open: true
            },
          ],

          //array of possible coordinates
          coordinates = [
            {
              lat: 55.5899,
              lon: 12.9212
            },
            {
              lat: 55.6109,
              lon: 12.9946
            },
            {
              lat: 55.6048,
              lon: 12.9874
            },
            {
              lat: 59.3473,
              lon: 18.0238
            },
            {
              lat: 58.0367,
              lon: 14.3127
            }
          ];
          //array of possible areas
          areas = [
            'Kirseberg',
            'Dalaplan',
            'Limhamn',
            'Rosengård',
            'Centrum'
          ],
          //array of possible types
          types =['Lägenhet', 'Villor'],
          //array of possible sizes
          sizes = [40, 50, 55, 60, 75, 100, 120, 125, 130, 150, 200, 800, 1000, 1500, 2000],
          //array of possible number of rooms
          rooms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 50],
          //array of possible number of toilets
          toilets =[1, 2, 3, 4, 5],
          //either there is a garden or there isnt one
          garden = [true, false],
          //either there is a balcony or there isnt one
          balcony =[true, false],
          //array of possible prices
          prices = [50, 200000, 500000, 800000, 1000000, 1500000, 2000000, 2450000, 5000000, 100000000],
          //array of possible descriptions
          descriptions = [
            'Unik chans att förvärva en exklusiv trea med möjlighet att köpa loss råvind och bygga etage. Här erbjuds en fantastisk lägenhet med påkostade och moderna materialval som blandas med äldre 20-tals detaljer. Genomgående planlösning med samtliga sovrumsfönster mot grönskande innergård. Utanför porten väntar Kungsholmens stora utbud och goda kommunikationer. Måste upplevas på plats!',
            'Nu har ni möjligheten att förvärva denna imponerande villa. Huset ligger så gott som insynsskyddat och ostört omgivet av ett charmigt villaområde nära hav och natur. Huset anno 2008 bjuder så väl interiört som exteriört på en modern och smakfull inredning, generöst ljusinsläpp och representativa sällskapsytor. En hänförande trädgård med ljuvliga uteplatser lockar och ett fantastiskt hus med medveten arkitektur förför. Här bor ni på första parkett i Falsterbo med underbara sällskapsytor och genomtänkt planlösning. Pool, jacuzzi och tillhörande spa/bastu!',
            'På tredje våningen i populära Brf Briljanten finner ni en lägenhet med bra planerade ytor för både familj och umgänge. Här ger fönsterpartierna ett härligt ljusinsläpp. En rymlig balkong med gott om plats att njuta av soliga dagar under de varmare årstiderna och skulle några droppar falla skyddar taket er.',
            'Med exklusiv design och stor karaktär är det lätt att trivas i denna ljuvliga fyra! Öppna sällskapsytor, generös takhöjd, väl tilltagen terrass och stora fönster välkomnar solljuset och låter det flöda fritt genom bostaden. Det moderna köket från Vedum är bostadens hjärta och lockar till många inspirerande matlagningstillfällen. Att man dessutom kan gå rakt ut på den mysiga stenlagda uteplatsen i sydöst från köket gör detta till ett guldläge. Tvättmöjligheter i bostaden och två badrum som båda är utrustade med dusch underlättar vardagens bestyr samt skänker ytterligare plus till bostaden. Hjärtligt välkomna hem!',
            'Välkomna till detta välplanerade hem med härlig balkong och skön kvällssol med utsikt över hamninloppet och några av Göteborgs landmärken. Ett attraktivt boende i hjärtat av Göteborg, ett guldläge för er som trivs i stadens puls men även önskar ett hem fyllt av lugn och ro. Här finns möjligheten till alternativ planlösning.',
            'Mitt i city finner ni denna underbara drömlägenhet med vackra bevarade originaldetaljer, takrosetter, generös takhöjd, härlig rymd, välplanerade ytor, fin utsikt, badrum och gäst-WC samt fantastisk innergård. Varmt välkomna hem!'
          ],
          //array of possible images for houses
          frontImagesH =[
            'hus1',
            'hus2',
            'hus3',
            'hus4',
            'hus5',
            'hus6',
            'hus7',
            'hus8',
            'hus9',
            'hus10',
            'hus11',
            'hus12',
            'hus13',
            'hus14',
            'hus15',
            'hus16',
            'hus17'
          ],
          //array of possible images for appartements
          frontImagesL =[
            'lag1',
            'lag2',
            'lag3',
            'lag4',
            'lag5',
            'lag6',
            'lag7',
            'lag8',
            'lag9',
            'lag10',
            'lag11',
            'lag12',
            'lag13',
            'lag14',
            'lag15',
            'lag16',
            'lag17' 
          ],
          //array of possible interior images
          intImages =[
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '19',
            '20'
          ],
          //array of possible sellers, we get this from our database
          sellers = [] = Seller.get();

        //function that return one item in an array
        function getRandomItem(arr){
          //uses the length of the array used as the maximum number
          return arr[Math.floor(Math.random()*arr.length)];
        }

        //Since we only want to add our dummydata to the database if its already empty,
        //we need to check wheter or not it already contains some data.
        //load from DB (GET)
        Home.get(function(x){
          //if it has a length (if its not empty), we do nothing.
          if(x.length){
            return;
          }
          //but if it is empty (has no length)
          else{
            //we call our init!
            init(1200);
          }
        });                                                                                                                           


        //init function, used to create dummydata, takes a itterations argument
        //that determines how many posts it will create
        function init(itterations){

        //loop through the specified number of itterations
        for (var i = 0; i < itterations; i++) {

          //since the exterior image is depending on the type, we set this first
          var t = getRandomItem(types),
              extImg = null;

          //if the type is an appartement, choose a random image from the appartement array
          if(t === 'Lägenhet'){
            extImg = getRandomItem(frontImagesL);
          //else choose a random image from the house array
          } else {
            extImg = getRandomItem(frontImagesH);
          }

          //get a random coordinate object
          var c = getRandomItem(coordinates);

          //in each itteration, we want to create a new object and store it in the DB
          Home.create([
            {
                "address": getRandomItem(adresses),
                "coordinates": [
                  {
                    "latitude": c.lat,
                    "longitude": c.lon
                  }
                ],
                "area" : getRandomItem(areas),
                "type" : t,
                "size" : getRandomItem(sizes),
                "rooms" : getRandomItem(rooms),
                "toilets" : getRandomItem(toilets),
                "garden" : getRandomItem(garden),
                "balcony" : getRandomItem(balcony),
                "price" : getRandomItem(prices),
                "img" : [
                  {
                    "name": "Exterior image",
                    "url": "imgs/objekt/ext/" + extImg + ".jpg"
                  },
                  {
                    "name": "Interior image 1",
                    "url": "imgs/objekt/int/" + getRandomItem(intImages) + ".jpg"
                  },
                  {
                    "name": "Interior image 2",
                    "url": "imgs/objekt/int/" + getRandomItem(intImages) + ".jpg"
                  },
                  {
                    "name": "Interior image 3",
                    "url": "imgs/objekt/int/" + getRandomItem(intImages) + ".jpg"
                  },
                  {
                    "name": "Interior image 4",
                    "url": "imgs/objekt/int/" + getRandomItem(intImages) + ".jpg"
                  }
                ],
                "seller" :getRandomItem(sellers)._id,
                "description": getRandomItem(descriptions),
                "show": getRandomItem(showDays)
              }
         ]);
        }
      }
    }]
  };
}]);