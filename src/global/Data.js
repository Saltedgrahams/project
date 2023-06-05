export const filterData = [
    {name:"Basic", image: require("../assets/basicwash.png"),id: "0"},
    {name:"Deluxe", image: require("../assets/cat2.png"),id: "1"},
    {name:"Premium", image: require("../assets/cat3.png"),id: "2"},
    {name:"Express", image: require("../assets/cat4.png"),id: "3"},
    {name:"Full", image: require("../assets/cat8.png"),id: "4"},
    {name:"Interior", image: require("../assets/cat7.png"),id: "5"},
    {name:"Exterior", image: require("../assets/cat5.png"),id: "6"},

];

export const filterData2 = [{name:"Basic Wash",image:require("../assets/BasicCarWash.jpg"), id:"0"},
{name:"Deluxe",image: require("../assets/DeluxeCarWash.jpg"),id:"1"},
{name:"Premium",image:require("../assets/PremiumCarWash.jpeg"),id:"2"},
{name:"Express",image: require("../assets/ExpressCarWash.jpeg"),id:"3"},
{name:"Full",image:require("../assets/fullcarwash.jpeg"),id:"4"},
{name:"Interior",image:require("../assets/interiorcarwash.jpeg"),id:"5"},  
{name:"Exterior",image:require("../assets/exteriorcarwash.jpg"),id:"6"},
{name:"Supreme",image:require("../assets/supremecarwash.jpg"),id:"7"},
{name:"Ultimate",image:require("../assets/ultimatecarwash.jpg"),id:"8"},  
{name:"Motor Cycle",image:require("../assets/motorcarwash.jpg"),id:"9"},
];



export const restaurantsData = [
    {
      carWashName: "G5 CarWash Cafe",
      farAway: "3", NameCar:"Cars Availability:" ,
      CarsAvail: "3",
      businessAddress: "Talisay City, Negros Occidental",
      images: require("../assets/G5Carwash.jpg"),
      averageReview: 4.9,
      numberOfReview: 120,
      coordinates: { lat: -26.1888612, lng: 28.246325 },
      discount: 10,
      deliveryTime: 30,
      collectTime: 5,
      carWashType: "Express,Supreme,Ultimate...",
      productData: [
        { name: "Body Wash", price: 120, image:  require("../assets/bodyWash.jpeg") },
        { name: "Vacuum", price: 90, image: require("../assets/vacuum.jpg") },
        { name: "Tire Black", price: 20, image: require("../assets/tireBlack.jpeg") },
      ],
      id: 0,
    },
    
    {carWashName:"Nice Day Car Wash", farAway:"1",NameCar:"Cars Availability:" , CarsAvail: "2",
    businessAddress:"Talisay City, Negros Occidental",
    images: require ("../assets/niceDay.jpeg"),
    averageReview:4.3,
     numberOfReview:306, 
     coordinates : {lat: -26.1891648, lng: 28.2441808},
    discount:20,
    deliveryTime:30,
    collectTime:10, 
    carWashType:"Express,interior, Exterior... ",
    productData:
    [{name:"Body Wash", price:29.00,image: require("../assets/bodyWash.jpeg")},
    {name:"Vacuum", price:51.80,image:require("../assets/vacuum.jpg")},
    {name:"Tire Black", price:100.00,image:require("../assets/tireBlack.jpeg")},
        ],
    id:1},
    
    {carWashName:"Wash Brew", farAway:"0", NameCar:"Cars Availability:" ,  CarsAvail: "1",
    businessAddress:"Menlo 1 Subdivision, Ramon Magsaysay St, Talisay City",
    images: require("../assets/washBrew.jpg"),
     coordinates :{ lat: -26.1886781, lng: 28.244879}, averageReview: 4.9,numberOfReview: 1272,
      discount:12, deliveryTime:25,collectTime:15,
      carWashType:"Supreme, Ultimate",
     productData:
     [{name:"Body Wash", price:29.00,image: require("../assets/bodyWash.jpeg")},
      {name:"Vacuum", price:50.00,image:require("../assets/vacuum.jpg")},
      {name:"Tire Black",
       price:70,image:require("../assets/tireBlack.jpeg")},
        ],
     id:2},
    
    {carWashName:"BAK Carwash & Detailing", farAway:"3", NameCar:"Cars Availability:" , CarsAvail: "3",businessAddress:"Eroreco Subdivision Park, Margarita St, Bacolod",
    images: require("../assets/BakCarWash.jpg"),
    averageReview:4.5, numberOfReview:700, coordinates: {lat: -26.1845336, lng: 28.2481691},
    discount:null,deliveryTime:20,collectTime:10,
    carWashType:"Full, Supreme, Ultimate...",
    productData:
    [{name:"BodyWash", price:29.00,image: require("../assets/bodyWash.jpeg")},
      {name:"Vacuum", price:50.00,image:require("../assets/vacuum.jpg")},{name:"Tire Black",
       price:120.00,image:require("../assets/tireBlack.jpeg")},
        ],
    id:3},
    ]

    export const productData = [{name:"Body Wash", price:29.00,image:require("../assets/bodyWash.jpeg"),
    details:"Washing soap specifically designed to handle your car's paint.",id:0},
      {name:"Vacuum", price:50.00,image:require("../assets/vacuum.jpg"),
      details:" The car vacuum supports dry and wet application, which quickly absorbs debris and spilled liquid inside the car.",id:1},
      {name:"Tire Black", price:70,image:require("../assets/tireBlack.jpeg"),details:"It prevents damage from UV light, draws heat away from parts of the car that tend to get hot when driving, and makes the tires durable.",id:2},
      
      {name:"Body Wash", price:29.00,image:require("../assets/bodyWash.jpeg"),
      details:"Washing soap specifically designed to handle your car's paint.",id:3},
      {name:"Vacuum", price:70.00,image:require("../assets/vacuum.jpg"),
      details:" The car vacuum supports dry and wet application, which quickly absorbs debris and spilled liquid inside the car.",id:4},
      {name:"Tire Black", price:70.00,image:require("../assets/tireBlack.jpeg"),details:"It prevents damage from UV light, draws heat away from parts of the car that tend to get hot when driving, and makes the tires durable.",id:5},
    
        ];   
           
    export const menuData = [
    
      {title:"Body Wash",special:false,key:0, },
      {title:"Engine Wash", special:false,key:1},
      {title:"Vacuum",special:false ,key:2},
      {title:"Tire Black",special:false ,key:3},
      {title:"Buff",special:false,key:4},
      {title:"Wax",special:false,key:5},
      {title:"Labor Only",special:false,key:6},
      {title:"Interior Hyper",special:false,key:7},
      {title:"Exterior Hyper",special:false,key:8},
      {title:"Engine Hyper",special:false,key:9},
      {title:"Bac to Zero",special:false,key:10},
    
      ] ;

  
      export const specialData =[
        {title:"LIMITED OFFER",key:0},
        {title:"Free Spray Wax",key:1},
        {title:"Free Buff Wax",key:2},
        {title:"Free Car Compressor",key:3},
      ];    
      
      export const menu = [
        { key: 1, title: 'Body Wash' },
        { key: 2, title: 'Engine Wash' },
        { key: 3, title: 'Vacuum' },
        { key: 4, title: 'Tire Black' },
        { key: 5, title: 'Buff' },
        { key: 6, title: 'Wax' },
        { key: 7, title: 'Labor Only' },
        { key: 8, title: 'Bac to Zero' },
      ]     

      
      export const menuDetailedData =[
        { 
          meal:"Individual",
          price:90,
          image:require("../assets/supremecarwash.jpg"),
          details:"Individual Car Wash",
          preferenceTitle:["Choose 2 Small Services","Choose your 1st Medium Service", "Choose your 2 Large Services","Would you like to add Wax?","Would you like the Labor Only?"  ],
          preferenceData: [
    
                          [{name:"Small",price:90,checked:false,id:10},{name:"Medium",price:100,checked:false ,id:11},{name:'Large',price:110 ,checked:false,id:12},
                          ],
    
                          [{name:"Body Wash",price:80 ,checked:false,id:13 },{name:"Engine Wash",price:80 ,checked:false,id:14},{name:'Buff',price:20,checked:false ,id:15},
                          {name:'Full',price:90,checked:false,id:16},{name:'Vacuum',price:90,checked:false,id:17},{name:'Wax',price:100 ,checked:false,id:18},
                          {name:'Engine Wash',price:16.95 ,checked:false,id:19},{name:'Tire Black',price:16.95 ,checked:false,id:20},
                          ],
    
                          [{name:"Body Wash",price:80,checked:false ,id:21},{name:"Engine Wash",price:80,checked:false ,id:22},{name:'Buff',price:20,checked:false ,id:23},
                          {name:'Full',price:90,checked:false,id:24},{name:'Vacuum',price:90,checked:false,id:25},{name:'Wax',price:100,checked:false ,id:26},
                          {name:'Engine Wash',price:16.95,checked:false ,id:27},{name:'Tire Black',price:16.95 ,checked:false,id:28},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:29},
                            ],
                              
                          [{name:"Interior",price:80 ,checked:false,id:30},{name:"Exterior",price:80,checked:false ,id:31},{name:'Engine Hyper',price:20,checked:false ,id:32},
                          ],
    
                          [
                          {name:"Body Wash",price:80 ,checked:false,id:33},{name:"Engine Wash",price:80 ,checked:false,id:34},{name:'Buff',price:20 ,checked:false,id:35},
                          {name:'Full',price:90,checked:false,id:36},{name:'Vacuum',price:90,checked:false,id:37},{name:'Wax',price:100 ,checked:false,id:38},
                          {name:'Engine Wash',price:16.95,checked:false ,id:39},{name:'Tire Black',price:16.95 ,checked:false,id:40},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:41},
                          ],
                          ],
          minimum_quatity:[2,1,1,null,null],
          counter:[0,0,0,0,0],
          required: [true,true,true,false,false],              
          id:0
        },
      
        { 
          meal:"Express", 
          price:29.30,
          image:require("../assets/bodyWash.jpeg"),
          details:"Premium",
          preferenceTitle:["Choose 2 Small Services","Choose your 1st Medium Service", "Choose your 2 Large Services","Would you like to add Wax?","Would you like the Labor Only?"  ],
          preferenceData: [
    
            [{name:"Small",price:90,checked:false,id:0},{name:"Medium",price:100,checked:false ,id:1},{name:'Large',price:110 ,checked:false,id:2},
            ],
    
            [{name:"Body Wash",price:80 ,checked:false,id:0 },{name:"Engine Wash",price:80 ,checked:false,id:1},{name:'Buff',price:20,checked:false ,id:2},
            {name:'Full',price:90,checked:false,id:3},{name:'Vacuum',price:90,checked:false,id:4},{name:'Wax',price:100 ,checked:false,id:5},
            {name:'Engine Wash',price:16.95 ,checked:false,id:6},{name:'Tire Black',price:16.95 ,checked:false,id:7},
            ],
    
            [{name:"Body Wash",price:80,checked:false ,id:0},{name:"Engine Wash",price:80,checked:false ,id:1},{name:'Buff',price:20,checked:false ,id:2},
            {name:'Full',price:90,checked:false,id:3},{name:'Vacuum',price:90,checked:false,id:4},{name:'Wax',price:100,checked:false ,id:5},
            {name:'Engine Wash',price:16.95,checked:false ,id:6},{name:'Tire Black',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:8},
              ],
                
            [{name:"Interior",price:80 ,checked:false,id:0},{name:"Exterior",price:80,checked:false ,id:1},{name:'Engine Hyper',price:20,checked:false ,id:2},
            ],
    
            [
            {name:"Body Wash",price:80 ,checked:false,id:0},{name:"Engine Wash",price:80 ,checked:false,id:1},{name:'Buff',price:20 ,checked:false,id:2},
            {name:'Full',price:90,checked:false,id:3},{name:'Vacuum',price:90,checked:false,id:4},{name:'Wax',price:100 ,checked:false,id:5},
            {name:'Engine Wash',price:16.95,checked:false ,id:6},{name:'Tire Black',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:8},
            ],
            ],
            minimum_quatity:[2,1,2,null,null],
            counter:[0,0,0,0,0],
            required: [true,true,true,false,false], 
            id:1
        },
      
        {
          meal:"Supreme",
          price:45.70,
          image:require("../assets/tireBlack.jpeg"),
          details:"Supreme",
          preferenceTitle:["Choose 2 Small Services","Choose your 1st Medium Service", "Choose your 2 Large Services","Would you like to add Wax?","Would you like the Labor Only?"  ],
          preferenceData: [
    
            [{name:"Small",price:90,checked:false,id:0},{name:"Medium",price:100,checked:false ,id:1},{name:'Large',price:110 ,checked:false,id:2},
            ],
    
            [{name:"Body Wash",price:80 ,checked:false,id:0 },{name:"Engine Wash",price:80 ,checked:false,id:1},{name:'Buff',price:20,checked:false ,id:2},
            {name:'Full',price:90,checked:false,id:3},{name:'Vacuum',price:90,checked:false,id:4},{name:'Wax',price:100 ,checked:false,id:5},
            {name:'Engine Wash',price:16.95 ,checked:false,id:6},{name:'Tire Black',price:16.95 ,checked:false,id:7},
            ],
    
            [{name:"Body Wash",price:80,checked:false ,id:0},{name:"Engine Wash",price:80,checked:false ,id:1},{name:'Buff',price:20,checked:false ,id:2},
            {name:'Full',price:90,checked:false,id:3},{name:'Vacuum',price:90,checked:false,id:4},{name:'Wax',price:100,checked:false ,id:5},
            {name:'Engine Wash',price:16.95,checked:false ,id:6},{name:'Tire Black',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:8},
              ],
                
            [{name:"Interior",price:80 ,checked:false,id:0},{name:"Exterior",price:80,checked:false ,id:1},{name:'Engine Hyper',price:20,checked:false ,id:2},
            ],
    
            [
            {name:"Body Wash",price:80 ,checked:false,id:0},{name:"Engine Wash",price:80 ,checked:false,id:1},{name:'Buff',price:20 ,checked:false,id:2},
            {name:'Full',price:90,checked:false,id:3},{name:'Vacuum',price:90,checked:false,id:4},{name:'Wax',price:100 ,checked:false,id:5},
            {name:'Engine Wash',price:16.95,checked:false ,id:6},{name:'Tire Black',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:8},
            ],
            ],
    
            minimum_quatity:[2,1,1,null,null],
            counter:[0,0,0,0,0],
            required: [true,true,true,false,false],   
          id:2
        },
      
        {
          meal:"Deluxe",
          price:50.80,
          image:require("../assets/DeluxeCarWash.jpg"),
          details:"Deluxe",
          preferenceTitle:["Choose 2 Small Services","Choose your 1st Medium Service", "Choose your 2 Large Services","Would you like to add Wax?","Would you like the Labor Only?"  ],
          preferenceData: [
    
            [{name:"Small",price:90,checked:false,id:0},{name:"Medium",price:100,checked:false ,id:1},{name:'Large',price:110 ,checked:false,id:2},
            ],
    
            [{name:"Body Wash",price:80 ,checked:false,id:0 },{name:"Engine Wash",price:80 ,checked:false,id:1},{name:'Buff',price:20,checked:false ,id:2},
            {name:'Full',price:90,checked:false,id:3},{name:'Vacuum',price:90,checked:false,id:4},{name:'Wax',price:100 ,checked:false,id:5},
            {name:'Engine Wash',price:16.95 ,checked:false,id:6},{name:'Tire Black',price:16.95 ,checked:false,id:7},
            ],
    
            [{name:"Body Wash",price:80,checked:false ,id:0},{name:"Engine Wash",price:80,checked:false ,id:1},{name:'Buff',price:20,checked:false ,id:2},
            {name:'Full',price:90,checked:false,id:3},{name:'Vacuum',price:90,checked:false,id:4},{name:'Wax',price:100,checked:false ,id:5},
            {name:'Engine Wash',price:16.95,checked:false ,id:6},{name:'Tire Black',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:8},
              ],
                
            [{name:"Interior",price:80 ,checked:false,id:0},{name:"Exterior",price:80,checked:false ,id:1},{name:'Tikka Sauce',price:20,checked:false ,id:2},
            ],
    
            [
            {name:"Body Wash",price:80 ,checked:false,id:0},{name:"Engine Wash",price:80 ,checked:false,id:1},{name:'Buff',price:20 ,checked:false,id:2},
            {name:'Full',price:90,checked:false,id:3},{name:'Vacuum',price:90,checked:false,id:4},{name:'Wax',price:100 ,checked:false,id:5},
            {name:'Engine Wash',price:16.95,checked:false ,id:6},{name:'Tire Black',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:8},
            ],
            ],
          
            minimum_quatity:[2,1,1,null,null],
            counter:[0,0,0,0,0],
            required: [true,true,true,false,false],    
          id:3
        },
      
        
        { 
          
          meal:"Premium", 
          price:29.30,
          image:require("../assets/PremiumCarWash.jpeg"),
          details:"Premium",
          
          preferenceTitle:["Choose 2 Small Services","Choose your 1st Medium Service", "Choose your 2 Large Services","Would you like to add Wax?","Would you like the Labor Only?"  ],
          
          preferenceData: [
    
            [{name:"Small",price:90,checked:false,id:0},{name:"Medium",price:100,checked:false ,id:1},{name:'Large',price:110 ,checked:false,id:2},
            ],
    
            [{name:"Body Wash",price:80 ,checked:false,id:0 },{name:"Engine Wash",price:80 ,checked:false,id:1},{name:'Buff',price:20,checked:false ,id:2},
            {name:'Full',price:90,checked:false,id:3},{name:'Vacuum',price:90,checked:false,id:4},{name:'Wax',price:100 ,checked:false,id:5},
            {name:'Engine Wash',price:16.95 ,checked:false,id:6},{name:'Tire Black',price:16.95 ,checked:false,id:7},
            ],
    
            [{name:"Body Wash",price:80,checked:false ,id:0},{name:"Engine Wash",price:80,checked:false ,id:1},{name:'Buff',price:20,checked:false ,id:2},
            {name:'Full',price:90,checked:false,id:3},{name:'Vacuum',price:90,checked:false,id:4},{name:'Wax',price:100,checked:false ,id:5},
            {name:'Engine Wash',price:16.95,checked:false ,id:6},{name:'Tire Black',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:8},
              ],
                
            [{name:"Interior",price:80 ,checked:false,id:0},{name:"Exterior",price:80,checked:false ,id:1},{name:'Tikka Sauce',price:20,checked:false ,id:2},
            ],
    
            [
            {name:"Body Wash",price:80 ,checked:false,id:0},{name:"Engine Wash",price:80 ,checked:false,id:1},{name:'Buff',price:20 ,checked:false,id:2},
            {name:'Full',price:90,checked:false,id:3},{name:'Vacuum',price:90,checked:false,id:4},{name:'Wax',price:100 ,checked:false,id:5},
            {name:'Engine Wash',price:16.95,checked:false ,id:6},{name:'Tire Black',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:8},
            ],
            ],
    
          minimum_quatity:[2,1,1,null,null],
          counter:[0,0,0,0,0],
          required: [true,true,true,false,false],     
          id:4
        },
    
        { 
          meal:"Ultimate",
          price:70.20,
          image:require("../assets/ultimatecarwash.jpg"),
          details:"Ultimate",
          preferenceTitle:["Choose 2 Small Services","Choose your 1st Medium Service", "Choose your 2 Large Services","Would you like to add Wax?","Would you like the Labor Only?"  ],
          preferenceData: [
    
                          [{name:"Small",price:90,checked:false,id:10},{name:"Medium",price:100,checked:false ,id:11},{name:'Large',price:110 ,checked:false,id:12},
                          ],
    
                          [{name:"Body Wash",price:80 ,checked:false,id:13 },{name:"Engine Wash",price:80 ,checked:false,id:14},{name:'Buff',price:20,checked:false ,id:15},
                          {name:'Full',price:90,checked:false,id:16},{name:'Vacuum',price:90,checked:false,id:17},{name:'Wax',price:100 ,checked:false,id:18},
                          {name:'Engine Wash',price:16.95 ,checked:false,id:19},{name:'Tire Black',price:16.95 ,checked:false,id:20},
                          ],
    
                          [{name:"Body Wash",price:80,checked:false ,id:21},{name:"Engine Wash",price:80,checked:false ,id:22},{name:'Buff',price:20,checked:false ,id:23},
                          {name:'Full',price:90,checked:false,id:24},{name:'Vacuum',price:90,checked:false,id:25},{name:'Wax',price:100,checked:false ,id:26},
                          {name:'Engine Wash',price:16.95,checked:false ,id:27},{name:'Tire Black',price:16.95 ,checked:false,id:28},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:29},
                            ],
                              
                          [{name:"Interior",price:80 ,checked:false,id:30},{name:"Exterior",price:80,checked:false ,id:31},{name:'Tikka Sauce',price:20,checked:false ,id:32},
                          ],
    
                          [
                          {name:"Body Wash",price:80 ,checked:false,id:33},{name:"Engine Wash",price:80 ,checked:false,id:34},{name:'Buff',price:20 ,checked:false,id:35},
                          {name:'Full',price:90,checked:false,id:36},{name:'Vacuum',price:90,checked:false,id:37},{name:'Wax',price:100 ,checked:false,id:38},
                          {name:'Engine Wash',price:16.95,checked:false ,id:39},{name:'Tire Black',price:16.95 ,checked:false,id:40},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:41},
                          ],
                          ],
          minimum_quatity:[2,1,1,null,null],
          counter:[0,0,0,0,0],
          required: [true,true,true,false,false],              
          id:5
        },
      
      ];