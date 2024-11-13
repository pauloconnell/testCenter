// initial content loaded from startPage() below the var declarations

// refactor 2020 - rebuild this using React TBD

$(document).ready(function(){
 
    console.log("loaded script ");
  
    // declare var to hold data/code for brands models and welcome page txt below
    var welcome="<center><div id='gold'><br><span class='bold'><strong>Try Before you Buy @ The Test Center </strong><br><span class='small'>Presented by:</span><strong> Can Ski</strong> and <strong>Showcase Snowboards</strong><br></span> <br><br>* Mountain Top Ski/Board Testing Locations* <br><b>Test Center</b> provides you the best knowledge through first hand experience.<br>   <br><b>Test Centres are located on either side of the Peak to Peak gondola on both Whistler and Blackcomb.</b><br><br></div><center>";
    
    
     
    const headLogoImage = `http://www.completeoutdoors.co.nz/image/catalog/Brand%20Logos/Head-Logo.jpg`;
    const blizzardLogoImage = `https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/0013/8897/brand.gif?itok=m0mH7kUJ`;
    // Image button data for all of our brand lists for skis
    var brandLogos='<div class="btnTab"><button class="btn" id="head"><img class="linkImg" width="70px" height="60px" src="https://www.completeoutdoors.co.nz/image/catalog/Brand%20Logos/Head-Logo.jpg" /></button><button id="blizzard" class="btn"><img class="linkImg"width="75px" height="75px" src="https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/0013/8897/brand.gif?itok=m0mH7kUJ" /></button><button id="salomon" class="btn"><img class="linkImg" width="70px" height="60px" src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/052016/untitled-1_305.png?itok=B3IG8RdO" /></button><button id="rosignol" class="btn"><img class="linkImg" width="125px" height="50px" src="https://logos-download.com/wp-content/uploads/2019/01/Rossignol_Logo.png" /></button><button id="stockli" class="btn"><img class="linkImg" width="120px"src="https://i.pinimg.com/originals/ea/5c/56/ea5c56054093bc99e220278e65189d66.jpg" /></button><button id="atomic" class="btn"><img class="linkImg" src="https://www.sefiles.net/merchant/2362/images/site/atomic-slimC.png?t=1512780708875" /></button><button id="volkl" class="btn"><img class="linkImg" width="120px" src="https://i.pinimg.com/originals/6c/7a/78/6c7a78139001ddf5e29bac7a6814dfda.png" /></button><button id="k2" class="btn"><img class="linkImg"  src="https://i1.adis.ws/i/k2/k2-logo" /></button><button id="nordica" class="btn"><img class="linkImg" width="120px" src="https://api.kicker.de/live/Media.svc/GetMedia/mediaId/442459/width/1012/height/405" /></button></div>';
    
    // Image Button data for all of our brand lists for boards
    var brandLogosBoards='<div class="btnTab"><button class="btn" id="burton"><img class="linkImg" width="80px" height="50px" src="https://2.bp.blogspot.com/-EquuP1ZW-GY/VHOUYDYkeyI/AAAAAAAAGzs/yAtxL1m1ABQ/s1600/Logo%2BBurton.png" /></button><button id="jones" class="btn"><img class="linkImg" width="75px" height="75px" src="https://www.logolynx.com/images/logolynx/0d/0df799765a74d65c6fdc22e27b911ec3.jpeg" /></button><button id="salomonSB" class="btn"><img class="linkImg" width="70px" height="60px" src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/052016/untitled-1_305.png?itok=B3IG8RdO" /></button><button id="libTech" class="btn"><img class="linkImg" width="100px" height="40px" src="https://cdn.shopify.com/s/files/1/0031/3532/files/lib-tech-snowboards.jpg?11661859022071001809" /></button><button id="gnu" class="btn"><img class="linkImg" src="https://s7d5.scene7.com/is/image/SummitSports/gnu" /></button><button id="ride" class="btn"><img class="linkImg" src="https://i1.adis.ws/i/ride/ride_logo" /></button></div>';
    
    
    var brandSKI="<h2>Ski Brands:</h2><center><div class='btnTab detailWindow'>"+brandLogos+"<button class='btn-primary' id='head'>Head</button><button class=btn-primary id='blizzard'>Blizzard</button><button class='btn-primary' id='salomon'>Salomon</button><button class = btn-primary id='rosignol'>Rosignol</button><button class='btn-primary' id= 'stockli'>Stockli<button class='btn-primary' id='atomic'>Atomic </button><button class='btn-primary' id='volkl'>Volkl</button><button class=btn-primary id='k2'>K2</button><button class='btn-primary' id='nordica'>Nordica</button></div></center>";
   
    
    // detailed data on each vendor
    
    var blizzardButtons=" <div class='detailWindow'><button class='btn-primary' id='bonifide'>Bonifide</button> <button class='btn-primary' id='brahma'>Brahma</button> <button class='btn-primary' id='rustler9'>Rustler 9</button> <button class='btn-primary' id='rustler10'>Rustler 10</button><button class='btn-primary' id='rustler11'>Rustler 11</button></div><div class='detailWindow'><button class='btn-primary' id='sheeva9'>Sheeva9</button><button class='btn-primary' id='sheeva10'>Sheeva10</button><button class='btn-primary' id='blackPearl'>Black Pearl</button></div>"
    var blizzard="<div class='btnTab detailWindow'><h2> Blizzard</h2><BR>Choose a model:<br><small>Click link twice if first request</small>"+blizzardButtons+"</div><br>";
   
    var rosignolButtons="<div class='detailWindow'><button class='btn-primary' id='e94'>Experience 94</button><button class='btn-primary' id='e88'>Experience 88</button><button class='btn-primary' id='e84vas'>E84?</button><button class='btn-primary' id='sky7'>Sky 7</button><button class='btn-primary' id='soul7'>Soul 7</button><button class='btn-primary' id='soul7W'>Soul 7 W</button></div>";
    var rosignol="<div class='btnTab detailWindow'><h2> Rosignol</h2><BR>Choose a model:<br><small>Click link twice if first request</small>"+rosignolButtons+" </div><br>";
    
    var headButtons="<div class='detailWindow'><button class='btn-primary' id='kore93'>Kore 93</button><button class='btn-primary' id='kore99'>Kore 99</button><button class='btn-primary' id='kore105'>Kore 105</button><button class='btn-primary' id='wildJoy'>Wild Joy</button></div>";
    var head="<div class='btnTab detailWindow'><h2>Head</h2><BR>Choose a model:<br><small>Click link twice if first request is blocked.</small>"+headButtons+"</div><br>";
    var headSuperShape="<a href='https://www.blizzardsports.com/canada/products/rustler-10-flat/' target:_blank><button class='btn-primary' id='rustler10'>Rustler 10</button></a>< href='https://www.blizzardsports.com/canada/products/rustler-11-flat/' target:_blank><button class='btn-primary' id='rustler11'>Rustler 11</button><button class='btn-primary' id='sheeva9'>Sheeva9</button></div><br>";
    
    var k2Buttons="<div class='detailWindow'><button class='btn-primary' id='mindBender108'>Mind Bender 108</button><button class='btn-primary' id='mindBender99'>MindBender 99</button><button class='btn-primary' id='mindBender90'>MindBender 90</button></div><div class='detailWindow'><button class='btn-primary' id='mindBender98'>Mindbender 98 Alliance </button><button class='btn-primary' id='mindBender88'>Mindbender 88 Alliance</button></div>";
    var k2="<div class='btnTab detailWindow'><h2>K2  </h2><br>Choose a model:<br><small>Click link twice if first request is blocked.</small>"+k2Buttons+"</div><br>";
     
      
    var salomonButtons="<div class='detailWindow'><button class='btn-primary' id='qst92'>QST 92</button><button class='btn-primary' id='qst99'>QST 99</button><button class='btn-primary' id='qst106'>QST 106</button></div>";
    var salomon="<div class='btnTab detailWindow'><h2>Salomon:</h2><BR>Choose a model: <br><small>Click link twice if first request is blocked.</small>"+salomonButtons+" </div><br>";
      
    var atomicButtons="<div class='detailWindow'><button class='btn-primary' id='bentChetler120'>Bent Chetler 120</button> <button class='btn-primary' id='bentChetler100'>Bent Chetler 100</button> <button class='btn-primary' id='vantage90'>Vantage 90</button></div>";
    var atomic="<div class='btnTab detailWindow'><h2>Atomic:</h2><br>Choose a model: <br><small>Click link twice if first request is blocked.</small>"+atomicButtons+"</div><br>";
    
    var stockliImage="";
    var stockliButtons="<div class='detailWindow'><button class='btn-primary' id=stormRider85>Storm Rider 85</button><button class='btn-primary' id='stormRider88'>Storm Rider 88</button><button class='btn-primary' id=stormRider95>Storm Rider 95</button><button class='btn-primary' id='lazerAx'>Lazer Ax</button><button class='btn-primary' id='lazerAr'>Lazer Ar D30</button></div>";
    var stockli="<div class='btnTab detailWindow'><h2>Stockli:</h2><br>Choose a model:<br><small>Click link twice if first request is blocked.</small>"+stockliButtons+"</div><br>";
    
    var volklButtons="<div class='detailWindow'><button class='btn-primary' id='mantra102'>Mantra 102</button> <button class='btn-primary' id='mantra'>Mantra</button><button class='btn-primary' id='kendo'>Kendo 88</button> <button class='btn-primary' id='secret92'>Secret 92</button><button class='btn-primary' id='kenja'>Kenja 88</button><button class='btn-primary' id='yumi'>Yumi</button></div>";
    var volkl="<div class='btnTab detailWindow'><h2>Volkl:</h2><BR>Choose a model:<br><small>Click link twice if first request is blocked.</small>"+volklButtons+"</div><br>";
    
    var nordicaButtons="<div class='detailWindow'><button class='btn-primary' id='enforcer93'>Enforcer 93</button><button class='btn-primary' id='enforcer100'>Enforcer 100</button> <button class='btn-primary' id='santa88'>Santa Ana 88</button><button class='btn-primary' id='santa93'>Santa Ana 93</button></div>";
    var nordica="<div class='btnTab detailWindow'><h2>Nordica</h2><br>Choose a model:<br><small>Click link twice if first request is blocked.</small>"+nordicaButtons+"</div><br>";
    // categoryData contains the links to choose by category
   
    var categoryData="<div class='detailWindow btnTab'><h2>Skis</h2><br><button class='btn-primary' id='allMt'>All Mountain Skis </button><button class = 'btn-primary' id='carving'>Carving Skis</button><button class='btn-primary' id='powderSkis'>Powder Skis</button><br></div><div class='detailWindow btnTab'><h2>Snowboards</h2><button class='btn-primary' id='allMtBoard'>All Mountain Boards</button><button class='btn-primary' id='parkBoard'>Park Boards</button><button class='btn-primary' id='powBoard'>Powder Boards</button><button class='btn-primary' id='twin'>Twin Boards</buton><button class='btn-primary' id='asym'>Asymetrical Boards</button></div><br>";     
  
  
    var brandSB="<h2>Snowboard Brands:</h2><div class='btnTab detailWindow'>"+brandLogosBoards+"<button class='btn-primary' id='burton'>Burton</button><button class='btn-primary' id='jones'>Jones</button><button class=btn-primary id='salomonSB'> Salomon</button><button class='btn-primary' id='libTech'>Lib Tech</button><button class='btn-primary' id='gnu'>Gnu</button><button class='btn-primary' id='ride'>Ride</button><br></div>";
    
    var burtonImage="https://www.boarderline.co.uk/images/brands/1476389456burton.jpg";
    var burtonButtons="<div class='detailWindow btnTab'><button class='btn-primary' id='process'>Process</button><button class='btn-primary' id='deepThinker'>Deep Thinker</button><button class='btn-primary' id='freeThinker'>Free Thinker</button><button class='btn-primary' id='paramount'>Paramount</button><button class='btn-primary' id='flightAttendent'>Flight Attendent</button><button class ='btn-primary' id='yeaSayer'>Yea Sayer</button><button class='btn-primary' id='talentScout'>Talent Scout</button><button class='btn-primary' id='storyBoard'>Story Board</button><button class='btn-primary' id='rewind'>Rewind</button></div>";
    var burton="<div class='btnTab detailWindow'><h2>Burton</h2><br>Choose a model:<br><small>Click link twice if first request is blocked.</small>"+burtonButtons+"</div><br>";
    
    var salomonSBButtons="<div class='btnTab detailWindow'><button class='btn-primary' id='sickStick'>Sick Stick</button><button class='btn-primary' id='pillowTalk'>PillowTalk</button><button class='btn-primary' id='assassin'>Assassin</button><button class='btn-primary' id='firstCall'>First Call</button><button class='btn-primary' id='rumbleFish'>Rumble Fish</button><button class='btn-primary' id='bellevue'>Bellevue</button></div>";
    var salomonSB="<div class='btnTab detailWindow'><h2>Salomon Snowboards</h2><br>Choose a model:<br><small>Click link twice if first request is blocked.</small>"+salomonSBButtons+"</div>";
    
    var jonesButtons="<div class='detailWindow btnTab'><button class='btn-primary' id='flagShip'>Flagship</button><button class='btn-primary' id='ultraMindExpander'>Ultra Mind Expander</button><button class='btn-primary' id='mindExpander'>Mind Expander</button><button class='btn-primary' id='dreamCatcher'>Dream Catcher</button><button class='btn-primary' id='mindExpanderWomen'>Women's Mind Expander</button></div>";
    var jones="<div class='btnTab detailWindow'><h2>Jones Snowboards</h2><br>Choose a model:<br><small>Click link twice if first request is blocked.</small>"+jonesButtons+"</div>"
    
    var rideButtons="<div class='detailWindow btnTab'><button class='btn-primary' id='berzerker'>Berzerker</button><button class='btn-primary' id='warPig'>War Pig</button><button class='btn-primary' id='twinPig'>Twin Pig</button><button class='btn-primary' id='psychoCandy'>Psycho Candy</button></div>";
    var ride="<div class='btnTab detailWindow'><h2>Ride Snowboards</h2><br>Choose a model:<br><small>Click link twice if first request is blocked.</small>"+rideButtons+"</div>";
   
    var libTechButtons="<div class='detailWindow btnTab'><button class='btn-primary' id='tRiceGold'>Travice Rice Gold Member HP C2Pro</button><button class='btn-primary' id='tRiceOrca'>Travice Rice Orca</button><button class='btn-primary' id='tRas'>T Ras C2</button><button class='btn-primary' id='eJack'>E-Jack C3</button><button class='btn-primary' id='dynaMiss'>Dynamiss C3 WMNS</button></div>";
    var libTech="<div class='btnTab detailWindow'><h2>Lib Tech Snowboards</h2><br>Choose a model:<br><small>Click link twice if first request is blocked.</small>"+libTechButtons+"</div>";
   
    var gnuButtons="<div class='detailWindow btnTab'><button class='btn-primary' id='mullair'>Mullair C3</button><button class='btn-primary' id='ridersChoice'>Riders Choice C2X</button><button class='btn-primary' id='ladiesChoice'>Asym Ladies Choice C2X</button><button class='btn-primary' id='proChoice'>Asym Pro Choice</button></div>";
    var gnu="<div class='btnTab detailWindow'><h2>Gnu Snowboards</h2><br>Choose a model:<br><small>Click link twice if first request is blocked.</small>"+gnuButtons+"</div>";
  
    
    
    
    //this runs upon unitialization: STARTING PAGE
    
    function startPage(){
      $('#content').html('<img class="linkImg" id="wbImage" src="https://images.all-free-download.com/images/graphicthumb/whistler_blackcomb_74144.jpg"><br>');
      $("#target").html(brandLogos+welcome+brandLogosBoards);
    };
    startPage();
    //Note  only Brand has 'Class' button-others are id's
    // target '.' for class (# for id)
  
    // click on top banner returns to home page:
   
    $(document).on('click', '#label',function(){ 
      startPage();
    });
    
    // Main Buttons
    $('.brands').click(function(){
      $("#content").html("<h2 class='p-3 m-1'>Brands</h2>");
      $('#target').html("<center><div class='detailWindow'><div>"+brandSB+"</div><div>"+brandSKI+"</div></div></center>");  
    });
    
    $('#skiBrands').click(function(){
      $('#content').html("<center><div class='detailWindow'><div>"+brandSKI+"</div></div></center>");
      $("#target").html("<h1>Choose any brand </h1>");
    });
    
    $("#boards").click(function(){
      $("#content").html("<center><div class='detailWindow'><div>"+brandSB+"</div></center>");
      $("#target").html("<h1>Choose any brand</h1>");
    });
  
    
    $('#categories').click(function(){
      $("#target").html("<div class='detailWindow'><center>"+categoryData+"</center></div>");
      $("#content").html("<h1>Choose which category you would like</h1>");
    });
    
    $(document).on('click', '#allMt',function(e){
      $('#content').html("<h3>All Mountain Skis</h3>");
      $("#target").html("<center><div class='myGrid2'>"+ blizzard+salomon+rosignol+head+k2+atomic+volkl+"</div></center>");
      $("#rustler11").remove();
      $("#lazerAx").remove();
      $("#bentChetler120").remove();
    });
    //remove any skis deemed not all mt.   but most of our skis are all mt. 
    
     $(document).on('click', '#carving',function(e){
      $('#content').html("<h3>Carving Skis</h3>");
      $('#target').html("<center><div class='myGrid2'>"+blizzard+salomon+rosignol+head+atomic+volkl+k2+"</div></center");
      removeCarving();
    });
   
      function removeCarving(){
        $("#rustler11").remove();
        $("#rustler10").remove();
        $("#sheeva10").remove();
        $("#qst106").remove();
        $("#soul7").remove();
        $("#soul7W").remove();
        $("#kore105").remove();
        $("#bentChetler120").remove();
        $("#mantra102").remove();
        $("#mindBender108").remove();
       
     
      };
    
     $(document).on('click', '#powderSkis',function(e){ 
      $("#content").html("<h2>Powder Skis</h2>");
     //use getElementid.innerHtml="";
      $("#target").html("<center><div class='myGrid2'>"+blizzard+salomon+rosignol+head+atomic+volkl+k2+" </div></center>");
      removePowSkis();
    });
    
    function removePowSkis(){
      $("#kore93").remove();
      $("#vantage90").remove();
      $("#rustler9").remove();
      $("#bonifide").remove();
      $("#brahma").remove();
      $("#sheeva9").remove();
      $("#blackPearl").remove();
      $("#qst92").remove();
      $("#e88").remove();
      $("#wildJoy").remove();
      $("#e84vas").remove();
      $("#kendo").remove();
      $("#kenja").remove();
      $("#secret92").remove();
      $("#yumi").remove();          
      $("#mindBender90").remove();
      $("#mindBender88").remove();      
      
    };
    
    $(document).on('click', '#allMtBoard',function(e){ 
      $('#content').html("<h2>All Mountain Boards</h2>");
      $('#target').html("<center><div class='myGrid2'>"+burton+ride+gnu+libTech+jones+"</div><br>"+brandSB+"</center>");
       removeAllMtBoard();
     // $("#").remove();
    //  $("#").remove();
     });
    function removeAllMtBoard(){
      $("#deepThinker").remove();
    }
    
   
     $(document).on('click', '#parkBoard',function(e){      
      $("#content").html("<h2>Park Boards</h2>");
      $('#target').html("<center><div class='myGrid2'>"+burton+ride+gnu+libTech+jones+"</div><br>"+brandSB+"</center>");
      removePark();
    });
   
      function removePark(){
        $("#deepThinker").remove();
        $("#ultraMindExpander").remove();
       
       
     
      };
    
       
  
     $(document).on('click', '#powBoard',function(e){ 
      
      $("#content").html("<h2>Pow Boards</h2>");
      $('#target').html("<center><div class='myGrid2'>"+burton+ride+gnu+libTech+jones+"</div><br>"+brandSB+"</center>");
      removePow();
    });
   
      function removePow(){
        $("#yeaSayer").remove();
        $("#talentScout").remove();
        $("#mullair").remove();
        $("#eJack").remove();
        $("#soul7").remove();
        $("#soul7W").remove();
        $("#kore105").remove();
        $("#bentChetler120").remove();
        $("#mantra102").remove();
        $("#mindBender108").remove();
       
     
      };
    
   
     $(document).on('click', '#twin',function(e){ 
    
      $("#content").html("<h2>Twin Boards</h2>");
      $('#target').html("<center><div class='myGrid2'>"+burton+ride+gnu+libTech+jones+"</div><br>"+brandSB+"</center>");
      removeTwin();
    });
   
      function removeTwin(){
        $("#deepThinker").remove();
        $("#flightAttendent").remove();
        $("#storyBoard").remove();
        $("#rewind").remove();
        $("#warPig").remove();
        $("#psychoCandy").remove();
        $("#tRiceOrca").remove();
        $("#flagShip").remove();
        $("#ultraMindExpander").remove();
        $("#mindBender108").remove();
       
     
      };
    
   
     $(document).on('click', '#asym',function(e){ 
    
      $("#content").html("<h2>Asymetrical Boards</h2>");
      $('#target').html("<center><div class='myGrid2'>"+burton+ride+gnu+libTech+jones+"</div><br>"+brandSB+"</center>");
      removeAsymetrical();
    });
   
  
      function removeAsymetrical(){
        $("#deepThinker").remove();
        $("#paramount").remove();
        $("#flightAttendent").remove();
        $("#rewind").remove();
        $("#storyBoard").remove();
        $("#warPig").remove();
        $("#psychoCandy").remove();
        $("#tRiceOrca").remove();
        $("#ultraMindExpander").remove();
        $("#mindBender108").remove();
       
     
      };
    
   
  $("#finder").click(function(){
    $("#content").html('<div class="btn-primary btn-lg" id="piste">On Piste</div><div class="btn-primary btn-lg" id="offPiste">Off Piste</div>');
  });
    
    // handles brands being clicked:
    
    //prototype for 2021:
  //  $(document).on('click','#newVendor',function(e){
  //    $('content').html("");
  //    $(' target').html(newVendor+"<br>"+brandSB)
  //  });
   
    $(document).on('click','#rosignol',function(e){
          console.log("clicked Rosi");
       $('#content').html("");
      $("#target").html("<center>"+rosignol+"<br>"+brandSKI+"</center>");
    });
    $(document).on('click', '#blizzard',function(e){
      $('#content').html("");
      $("#target").html("<center>"+blizzard+"<br>"+brandSKI+"</center>");
    });
    $(document).on('click', '#salomon', function(e){
      $('#content').html("");
      $("#target").html("<center>"+salomon+"<br>"+brandSKI+"</center>");
    });
    
    
    $(document).on('click', '#stockli', function(e){
      $('#content').html("");
      $("#target").html("<center>"+stockli+"<br>"+brandSKI+"</center>");
    });
    
    $(document).on('click', '#atomic', function(e){
      $('#content').html("");
      $("#target").html("<center>"+atomic+"<br>"+brandSKI+"</center>");
    });
    $(document).on('click', '#volkl',function(e){
      $('#content').html("");
      $("#target").html("<center>"+volkl+"<br>"+brandSKI+"</center>");
    });
    $(document).on('click', '#head',function(e){
      $('#content').html("");
      $("#target").html("<center>"+head+"<br>"+brandSKI+"</center>");
    });
    $(document).on('click', '#nordica',function(e){
      $('#content').html("");
      $("#target").html("<center>"+nordica+"<br>"+brandSKI+"</center>");
    });
    
    $(document).on('click', '#k2',function(e){
      $('#content').html("");
      $("#target").html("<center>"+k2+"<br>"+brandSKI+"</center>");
    });
    
    //board brands
     $(document).on('click','#burton',function(e){
          console.log("clicked");
      $('#content').html("");
      $("#target").html("<center>"+burton+"<br>"+brandSB+"</center>");
  });
    $(document).on('click', '#salomonSB', function(e){
      $('#content').html("");
      $("#target").html("<center>"+salomonSB+"<br>"+brandSB+"</center>");
    });
    $(document).on('click', '#ride',function(e){
      $('#content').html("");
      $("#target").html("<center>"+ride+"<br>"+brandSB+"</center>");
    });
    $(document).on('click', '#jones', function(e){
      $('#content').html("");
      $("#target").html("<center>"+jones+"<br>"+brandSB+"</center>");
    });
    $(document).on('click', '#libTech', function(e){
      $('#content').html("");
      $("#target").html("<center>"+libTech+"<br>"+brandSB+"</center>");
    });
    $(document).on('click', '#gnu', function(e){
      $('#content').html("");
      $("#target").html("<center>"+gnu+"<br>"+brandSB+"</center>");
    });
    
    
    //  handles  models being clicked
    
    // Blizzard models:
    
    $(document).on('click','#bonifide',function(e){
          console.log("clicked bonifide");
       $('#content').html("<h2>Bonifide</h2><div class='detailWindow'><b>Similar models :</b><div class='row'><button class='btn-primary' id='core93'>Core 93</button><buton class='btn-primary' id='sky7'>Sky 7</button><button class='btn-primary' id='qst92'>QST 92</button><button class='btn-primary' id='brahma'>Brahma</button><button class='btn-primary' id='rustler9'>Rustler 9</button></div></div>");
      $('#target').html("<h2> Blizzard</h2>"+blizzardButtons+"<iframe id='blizzardBonifide' src='https://www.blizzardsports.com/canada/products/bonafide-flat/' width=100% height=400px> Your Browser doesn't support iframes...</iframe><br><br><br><iframe width='100%' height='315' src='https://www.youtube.com/embed/bW-YL1kSrUg?autoplay=1' frameborder='0' allow='accelerometer; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
     
    });
  $(document).on('click', '#brahma', function(e){
      $('#content').html("<h2> Brahma</h2><div class='detailWindow'><b>Similar models :</b><div class='row'><button class='btn-primary' id='kore93'>Kore 93</button><button class='btn-primary' id='qst92'>QST 92</button><button class='btn-primary' id='bonifide'>Bonifide</button><button class='btn-primary' id='kendo'>Kendo</button></div></div>");
    $('#target').html("<h2>Blizzard</h2>"+blizzardButtons+"<iframe src='https://www.blizzardsports.com/products/brahma-88-flat/' width=100% height=400px></iframe>");
  });
    
    
    $(document).on('click', '#blackPearl', function(e){
      $('#content').html("<h2>Black Pearl 88</h2><div class='detailWindow'><b>Similar models :</b><div class='row'><button class='btn-primary' id='secret92'>Secret 92</button><button class='btn-primary' id='qst92'>Qst 92</button><button class='btn-primary' id='sheeva9'>Sheeva 9</button><button class='btn-primary' id='santa88'>Santa Ana 88</button></div></div>");
    $('#target').html("<h2>Blizzard</h2>"+blizzardButtons+"<iframe src='https://www.blizzardsports.com/products/black-pearl-88-flat/' width=100% height=500px></iframe>");
  });
    
    
    
    $(document).on('click', '#sheeva9', function(e){
      $('#content').html("<h2> Sheeva 9</h2><div class='detailWindow'><b>Similar models :</b><div class='row'><button class='btn-primary' id='blackPearl'>Black Pearl</button><button class='btn-primary'>option</button><button class='btn-primary' id='rustler9'>Rustler 9</button><button class='btn-primary' id='sheeva10'>Sheeva 10</button></div></div>");
    $('#target').html("<h2>Blizzard</h2>"+blizzardButtons+"<iframe src='https://www.blizzardsports.com/products/sheeva-9-flat/' width=100% height=500px></iframe>");
  });
    
    
    $(document).on('click', '#sheeva10', function(e){
      $('#content').html("<h2> Sheeva 10</h2><div class='detailWindow'><b>Similar models :</b><div class='row'><button class='btn-primary' id='kore93'>Kore 93</button><button class='btn-primary'>Options</button><button class='btn-primary' id='rustler9'>Rustler 9</button><button class='btn-primary' id='sheeva10'>Sheeva 10</button></div></div>");
    $('#target').html("<h2>Blizzard</h2>"+blizzardButtons+"<iframe src='https://www.blizzardsports.com/products/sheeva-10-flat/' width=100% height=500px></iframe>");
  });  
    $(document).on('click', '#rustler11', function(e){
      $('#content').html("<h2>Rustler 11</h2> <div class='detailWindow'><b>Similar models :</b> <div class='row'><button class='btn-primary' id='kore105'>Kore 105</button> <button class='btn-primary'>Bent Chetlerx</button><button class='btn-primary' id='qst106'>QST 106</button><button class='btn-primary' id='rustler10'>Rustler 10</button></div></div>");
    $('#target').html("<h2>Blizzard</h2>"+blizzardButtons+"<iframe src='https://www.blizzardsports.com/canada/products/rustler-11-flat/'width=100% height=500px></iframe>");
  });
    $(document).on('click', '#rustler10', function(e){
      $('#content').html("<h2>Rustler 10 </h2><div class='detailWindow'><b>Similar models :</b><div class='row'><button class='btn-primary' id='kore105'>Kore 105</button> <button class='btn-primary'>Bent Chet</button><button class='btn-primary' id='rustler9'>Rustler 9</button><button class='btn-primary' id='rustler11'>Rustler 11</button></div></div>");
    $('#target').html("<h2>Blizzard</h2>"+blizzardButtons+"<iframe src= 'https://www.blizzardsports.com/canada/products/rustler-10-flat/'width=100% height=500px></iframe>");
  });
    $(document).on('click', '#rustler9', function(e){
      $('#content').html("<h2>Rustler 9</h2><div class='detailWindow'><b>Similar models :</b><div class='row'><button class='btn-primary' id='kore93'>Kore 93</button> <button class='btn-primary'>Bent Chet x</button><button class='btn-primary' id='rustler10'>Rustler 10</button><button class='btn-primary' id='brahma'>Brahma</button></div></div>");
    $('#target').html("<h2> Blizzard</h2>"+blizzardButtons+"<iframe src='https://www.blizzardsports.com/canada/products/rustler-9-flat/' width=100% height=500px></iframe>");
  }); 
    
    // Salomon models:
    $(document).on('click', '#qst92', function(e){
      $('#content').html("<h2> Salomon</h2> <b>Similar models :</b><div class='row'><button class='btn-primary' id='core93'>Kore 93</button><button class='btn-primary' id='brahma'>Brahma</button><button class='btn-primary' id='rustler9'>Rustler 9</button><button class='btn-primary' id='qst99'>QST 99</button><button class='btn-primary' id='sky7'>Sky 7</button><button class='btn-primary' id='stormRider95'>StormRider 95</button></div>");
      $('#target').html("<h2> QST 92</h2>"+salomonButtons+"<iframe src='https://www.salomon.com/en-ca/shop/product/n-qst-92.html#1191=18760' width=100% height=500px></iframe>");//code to display models in iframes
  }); 
    $(document).on('click', '#qst99', function(e){
      $('#content').html("<h2> Salomon</h2> <b>Similar models :</b> <div class='row'><button class='btn-primary' id='core99'>Kore 99</button> <button class='btn-primary'>Bent  Chet x</button><button class='btn-primary' id='bonifide'>Bonifide</button><button class='btn-primary' id='rustler10'>Rustler 10</button></div>");
      $('#target').html("<h2>QST 99</h2>"+salomonButtons+"</div><iframe src='https://www.salomon.com/en-ca/shop/product/n-qst-99.html#1191=18742' width=100% height=500px></iframe>");//code to display models in iframes
  });
    $(document).on('click', '#qst106', function(e){
      $('#target').html("<h2>QST 106</h2>"+salomonButtons+"</div><iframe src='https://www.salomon.com/en-ca/shop/product/n-qst-106.html#1191=10794' width=100% height=700px></iframe><iframe width='100%' height='700px' src='https://www.youtube.com/embed/1XPmoE9uIgM?autoplay=1' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");//loading this twice as it's required first load
      $('#content').html("<h2> Salomon</h2><b>Similar models :</b><div class='row'><button class='btn-primary' id='core105'>Kore 105</button><button class='btn-primary'>Bent  Chet x</button><button class='btn-primary' id='rustler11'>Rustler 11</button><button class='btn-primary' id='soul7'>Soul 7</button></div>");
      $('#target').html("<h2>QST 106</h2>"+salomonButtons+"</div><iframe src='https://www.salomon.com/en-ca/shop/product/n-qst-106.html#1191=10794' width=100% height=700px></iframe><iframe width='100%' height='700px' src='https://www.youtube.com/embed/1XPmoE9uIgM?autoplay=1' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");//2nd load of code to display models in iframes-
  });
    
    // Stockli models - doesn't load-not permitted by site
    
    $(document).on('click', '#stormRider85', function(e){
      $('#content').html("<h2> Stockli</h2> <b>Similar models :</b><div class='row'><button class='btn-primary' id='core105'>Kore 105</button><button class='btn-primary'>Bent Chet x</button><button class='btn-primary' id='qst99'>Qst 99</button><button class='btn-primary' id='rustler10'>Rustler 10</button></div>");
      $('#target').html("<h2>StormRider 85</h2>"+stockliButtons+"<iframe src='https://www.proskilab.com/f/women-s-all-mountain-front/ski-reviews-2019-stockli-stormrider-85/635' width=100% height=500px></iframe>");//code to display models in iframes
  });
    
    
     $(document).on('click', '#stormRider88', function(e){
      $('#content').html("<h2> Stockli</h2> <b>Similar models :</b><div class='row'><button class='btn-primary' id='kore93'>Kore 93</button><button class='btn-primary'>Several Model options from all of our vendors</button><button class='btn-primary' id='rustler10'>R10</button><button class='btn-primary' id='rustler11'>R11</button></div>");
    $('#target').html("<h2>StormRider 88</h2>"+stockliButtons+"<iframe src='https://www.proskilab.com/h/men-s-all-mountain-front/ski-reviews-2019-stockli-stormrider-88/611' width=100% height=500px></iframe>");
  }); 
    
    
     $(document).on('click', '#stormRider95', function(e){
      $('#content').html("<h2> Stockli</h2> <b>Similar models :</b><div class='row'><button class='btn-primary' id='kore93'>Kore 93</button><button class='btn-primary'>Several Model options from all of our vendors</button><button class='btn-primary' id='rustler10'>R10</button><button class='btn-primary' id='rustler11'>R11</button></div>");
    $('#target').html("<h2>StormRider 95</h2>"+stockliButtons+"<iframe src='https://www.proskilab.com/h/men-s-all-mountain-back/ski-reviews-2019-stockli-stormrider-95/613' width=100% height=500px></iframe>");
  }); 
    
    $(document).on('click', '#lazerAx', function(e){
      $('#content').html("<h2> Stockli</h2> <b>Similar models :</b><div class='row'><button class='btn-primary' id='core105'>Kore 105</button><button class='btn-primary'>Bent Chet x</button><button class='btn-primary' id='qst99'>Qst 99</button><button class='btn-primary' id='rustler10'>Rustler 10</button></div>");
      $('#target').html("<h2>Lazer Ax</h2>"+stockliButtons+"<iframe src='https://www.snow-online.com/ski/stoeckli-laser-ax-2018.htmlp' width=100% height=500px></iframe>");//code to display models in iframes
  });
    
    $(document).on('click', '#lazerAr', function(e){
      $('#content').html("<h2> Stockli</h2> <b>Similar models :</b><div class='row'><button class='btn-primary' id='core105'>Kore 105</button><button class='btn-primary'>Bent Chet x</button><button class='btn-primary' id='qst99'>Qst 99</button><button class='btn-primary' id='rustler10'>Rustler 10</button></div>");
      $('#target').html("<h2>Lazer Ar D30</h2>"+stockliButtons+"<iframe src='https://www.powder7.com/ski-blog/stockli-laser-ar-ski-review-the-newest-swiss-ripper/' width=100% height=500px></iframe>");//code to display models in iframes
  });
    
    
    // Atomic models:  Atomic doesn't allow ref
    $(document).on('click', '#bentChetler100', function(e){
      $('#content').html("<h2>Atomic</h2> <b>Similar models :</b><div class='row'><button class='btn-primary' id='core93'>Kore 93</button><button class='btn-primary' id='brahma'>Brahma</button><button class='btn-primary' id='rustler9'>Rustler 9</button><button class='btn-primary' id='qst99'>QST 99</button></div>");
      $('#target').html("<h2>Bent Chetler 100</h2>"+atomicButtons+"<iframe src='https://www.newschoolers.com/ski-gear-2020/Skis/581/Bent-Chetler-100' width=100% height=500px></iframe>");//code to display models in iframes
  }); 
     $(document).on('click', '#bentChetler120', function(e){
      $('#content').html("<h2> Atomic</h2> <b>Similar models :</b> <div class='row'><button class='btn-primary' id='core105'>Kore 105</button><button class='btn-primary'>Bent Chet x</button><button class='btn-primary' id='qst99'>Qst 99</button><button class='btn-primary' id='rustler10'>Rustler 10</button></div>");
      $('#target').html("<h2>Bent Chetler 120</h2>"+atomicButtons+"<iframe src='https://www.newschoolers.com/ski-gear-2020/Skis/580/Bent-Chetler-120' width=100% height=500px></iframe>");//code to display models in iframes
  });
   
     $(document).on('click', '#vantage90', function(e){
      $('#content').html("<h2> Atomic</h2><b>Similar models :</b><div class='row'><button class='btn-primary' id='core105'>Kore 105</button><button class='btn-primary'>Bent Chet x</button><button class='btn-primary' id='qst99'>Qst 99</button><button class='btn-primary' id='rustler10'>Rustler 10</button></div>");
      $('#target').html("<h2>Vantage 90</h2>"+atomicButtons+"<iframe src='https://www.corbetts.com/2020-atomic-vantage-90-ti-skis/' width=100% height=500px></iframe>");//code to display models in iframes
  });
   
    
    //Rosi site doesn't allow calls
    $(document).on('click', '#e94', function(e){
      $('#content').html("<h2> Rosignol </h2> <b>Similar models :</b><div class='row'><button class='btn-primary' id='core105'>Kore 105</button><button class='btn-primary'>Several Model options from all of our vendors</button><button class='btn-primary' id='rustler11'>Rustler 11</button><button class='btn-primary' id='rustler10'>Rustler 10</button></div>");
      $('#target').html("<h2>Experience 94 Ti</h2>"+rosignolButtons+"<iframe src='https://www.corbetts.com/2020-rossignol-experience-94-ti-skis/' width=100% height=500px></iframe>");//code to display models in iframes
  });
   
    $(document).on('click', '#e88', function(e){
      $('#content').html("<h2> Rosignol </h2> <b>Similar models :</b><div class='row'><button class='btn-primary' id='core105'>Kore 105</button><button class='btn-primary'>Several Model options from all of our vendors</button><button class='btn-primary' id='rustler11'>Rustler 11</button><button class='btn-primary' id='rustler10'>Rustler 10</button></div>");
      $('#target').html("<h2>Experience 88</h2>"+rosignolButtons+"<iframe src='https://www.corbetts.com/2020-rossignol-experience-88-ti-womens-skis/' width=100% height=500px></iframe>");//code to display models in iframes
  });
   
  
    $(document).on('click', '#sky7', function(e){
      $('#content').html("<h2> Rosignol </h2> <b>Similar models :</b><div class='row'><button class='btn-primary' id='core105'>Kore 105</button><button class='btn-primary'>Several Model options from all of our vendors</button><button class='btn-primary' id='rustler11'>Rustler 11</button><button class='btn-primary' id='rustler10'>Rustler 10</button></div>");
      $('#target').html("<h2>Sky 7</h2>"+rosignolButtons+"<iframe src='https://www.corbetts.com/2020-rossignol-sky-7-hd-skis/' width=100% height=500px></iframe>");//code to display models in iframes
  });
    
    $(document).on('click', '#soul7', function(e){
      $('#content').html("<h2> Rosignol </h2> <b>Similar models :</b><div class='row'><button class='btn-primary' id='core105'>Kore 105</button><button class='btn-primary'>Several Model options from all of our vendors</button><button class='btn-primary' id='rustler11'>Rustler 11</button><button class='btn-primary' id='rustler10'>Rustler 10</button></div>");
      $('#target').html("<h2>Soul 7</h2>"+rosignolButtons+"<iframe src='https://www.corbetts.com/2020-rossignol-soul-7-hd-skis/' width=100% height=500px></iframe>");//code to display models in iframes
  });
    
    $(document).on('click', '#soul7W', function(e){
      $('#content').html("<h2> Rosignol </h2> <b>Similar models :</b><div class='row'><button class='btn-primary' id='core105'>Kore 105</button><button class='btn-primary'>Several Model options from all of our vendors</button><button class='btn-primary' id='rustler11'>Rustler 11</button><button class='btn-primary' id='rustler10'>Rustler 10</button></div>");
      $('#target').html("<h2>Soul 7 Womens</h2>"+rosignolButtons+"<iframe src='https://www.corbetts.com/2020-rossignol-soul-7-hd-womens-skis/' width=100% height=500px></iframe>");//code to display models in iframes
  });
   
    //Volkl models:
    
    $(document).on('click', '#mantra102', function(e){
      $('#content').html("<h2> Volkl</h2><b>Similar models :</b> <div class='row'><button class='btn-primary' id='core105'>Kore 105</button><button class='btn-primary'>Bent Chet x</button><button class='btn-primary' id='qst99'>Qst 99</button><button class='btn-primary' id='rustler10'>Rustler 10</button></div>");
      $('#target').html("<h2>Mantra 102</h2>"+volklButtons+"<iframe src='https://www.voelkl.com/en-us/products/skis/freeride/mantra-102-6074' width=100% height=500px></iframe>");//code to display models in iframes
  });
    
   $(document).on('click', '#mantra', function(e){
      $('#content').html("<h2> Volkl</h2><b>Similar models :</b><div class='row'><button class='btn-primary' id='core105'>Kore 105</button><button class='btn-primary' id='kore99'>Kore99 </button><button class='btn-primary' id='qst99'>Qst 99</button><button class='btn-primary' id='rustler10'>Rustler 10</button>");
      $('#target').html("<h2>Mantra M5</h2>"+volklButtons+"<iframe src='https://www.voelkl.com/en-us/products/skis/freeride/m5-mantra-5976' width=100% height=500px></iframe>");//code to display models in iframes
  }); 
    
    $(document).on('click', '#kendo', function(e){
      $('#content').html("<h2> Volkl</h2><b>Similar models :</b><div class='row'><button class='btn-primary' id='kore92'>Kore 92</button><button class='btn-primary'>bent Chetx</button><button class='btn-primary' id='kendo1'>Kendo1</button><button class='btn-primary' id='rustler10'>Rustler 10</button></div>");
      $('#target').html("<h2>Kendo</h2>"+volklButtons+"<iframe src='https://www.voelkl.com/en-us/products/skis/freeride/kendo-88-5983' width=100% height=500px></iframe>");//code to display models in iframes
  }); 
    
   $(document).on('click', '#secret92', function(e){
      $('#content').html("<h2> Volkl</h2><b>Similar models :</b><div class='row'><button class='btn-primary' id='core105'>Kore 105</button><button class='btn-primary'>Several Model options from all of our vendors</button><button class='btn-primary' id='rustler11'>Rustler 11</button><button class='btn-primary' id='rustler10'>Rustler 10</button></div>");
      $('#target').html("<h2>Secret 92</h2>"+volklButtons+"<iframe src='https://www.voelkl.com/en-us/products/skis/freeride/secret-92-7914' width=100% height=500px></iframe>");//code to display models in iframes
  }); 
    
    
     $(document).on('click', '#kenja', function(e){
      $('#content').html("<h2> Volkl</h2> <b>Similar models :</b><div class='row'><button class='btn-primary' id=kore93>Kore 93</button><button class='btn-primary'>Model options</button><button class='btn-primary' id='rustler11'>Rustler 11</button><button class='btn-primary' id='rustler10'>Rustler 10</button></div>");
      $('#target').html("<h2>Kenja </h2>"+volklButtons+"<iframe src='https://www.voelkl.com/en-us/products/skis/freeride/kenja-88-6004' width=100% height=500px></iframe>");//code to display models in iframes
  }); 
     $(document).on('click', '#yumi', function(e){
      $('#content').html("<h2> Volkl</h2><b>Similar models :</b><div class='row'><button class='btn-primary' id='yumi1'>yumi1</button> <button class='btn-primary'>options</button><button class='btn-primary' id='yumi2'>Yumi2</button><button class='btn-primary' id='yumi3'>Yumi3</button></div>");
      $('#target').html("<h2>Yumi</h2>"+volklButtons+"<iframe src='https://www.voelkl.com/en-us/products/skis/freeride/yumi-6016/' width=100% height=500px></iframe>");//code to display models in iframes
  }); 
  
   // Nordica models
    
   $(document).on('click', '#enforcer93', function(e){
      $('#content').html("<h2> Nordica</h2> <b>Similar models :</b><div class='row'><button class='btn-primary' id='kore93'>Kore 93</button><button class='btn-primary'>Model options</button><button class='btn-primary' id='rustler9'>Rustler 9</button><button class='btn-primary' id='qst92'>Qst 92</button></div>");
      $('#target').html("<h2> Enforcer 93</h2>"+nordicaButtons+"<iframe src='https://www.nordica.com/usa/men/skis/all-mountain/enforcer/enforcer-93' width=100% height=500px></iframe>");//code to display models in iframes
  }); 
     $(document).on('click', '#enforcer100', function(e){
      $('#content').html("<h2> Nordica</h2> <b>Similar models to try :</b> <div class='row'><button class='btn-primary' id='core105'>Kore 105</button><button class='btn-primary'>Model options</button><button class='btn-primary' id='rustler11'>Rustler 11</button><button class='btn-primary' id='rustler10'>Rustler 10</button></div>");
      $('#target').html("<h2> Enforcer 100</h2>"+nordicaButtons+"<iframe src='https://www.nordica.com/usa/men/skis/all-mountain/enforcer/enforcer-93' width=100% height=500px></iframe>");//code to display models in iframes
  }); 
    
     $(document).on('click', '#santa88', function(e){
      $('#content').html("<h2> Nordica</h2> <b>Similar models :</b><div class='row'><button class='btn-primary' id='core105'>Kore 105</button><button class='btn-primary'>option</button><button class='btn-primary' id='rustler11'>Rustler 11</button><button class='btn-primary' id='rustler10'>Rustler 10</button></div>");
      $('#target').html("<h2> Santa Ana 88</h2>"+nordicaButtons+"<iframe src='https://www.nordica.com/usa/women/skis/freeski/santa-ana/santa-ana-88/' width=100% height=500px></iframe>");//code to display models in iframes
  }); 
    
     $(document).on('click', '#santa93', function(e){
      $('#content').html("<h2> Nordica</h2> <b>Similar models :</b><div class='row'><button class='btn-primary' id='core105'>Kore 105</button><button class='btn-primary'>option</button><button class='btn-primary' id='rustler11'>Rustler 11</button><button class='btn-primary' id='rustler10'>Rustler 10</button></div>");
      $('#target').html("<h2> Santa Ana 93</h2>"+nordicaButtons+"<iframe src='https://www.nordica.com/usa/women/skis/freeski/santa-ana/santa-ana-93/' width=100% height=500px></iframe>");//code to display models in iframes
  }); 
    
    // k2 models
    
     $(document).on('click', '#mindBender108', function(e){
      $('#content').html("<h2> K2</h2> <b>Similar models :</b><div class='row'><button class='btn-primary' id='core105'>Kore 105</button><button class='btn-primary'>option</button><button class='btn-primary' id='rustler11'>Rustler 11</button><button class='btn-primary' id='rustler10'>Rustler 10</button></div>");
      $('#target').html("<h2> Mindbender 108 ti</h2>"+k2Buttons+"<iframe src='https://www.corbetts.com/2020-k2-mindbender-108-ti-skis/' width=100% height=500px></iframe>");//code to display models in iframes
  }); 
    
    
    
     $(document).on('click', '#mindBender99', function(e){
      $('#content').html("<h2> K2</h2> <b>Similar models :</b><div class='row'><button class='btn-primary' id='core105'>Kore 105</button><button class='btn-primary'>option</button><button class='btn-primary' id='rustler11'>Rustler 11</button><button class='btn-primary' id='rustler10'>Rustler 10</button></div>");
      $('#target').html("<h2> Mindbender 99</h2>"+k2Buttons+"<iframe src='https://www.corbetts.com/2020-k2-mindbender-99-ti-skis/' width=100% height=500px></iframe>");//code to display models in iframes
  }); 
    
     $(document).on('click', '#mindBender90', function(e){
      $('#content').html("<h2> K2</h2> <b>Similar models :</b><div class='row'><button class='btn-primary' id='core105'>Kore 105</button><button class='btn-primary'>option</button><button class='btn-primary' id='rustler11'>Rustler 11</button><button class='btn-primary' id='rustler10'>Rustler 10</button></div>");
      $('#target').html("<h2> Mindbender 90 Alliance </h2>"+k2Buttons+"<iframe src='https://www.corbetts.com/2020-k2-mindbender-90-alliance-womens-skis/' width=100% height=500px></iframe>");//code to display models in iframes
  }); 
    
     $(document).on('click', '#mindBender98', function(e){
      $('#content').html("<h2> K2</h2> <b>Similar models :</b><div class='row'><button class='btn-primary' id='core105'>Kore 105</buttonn><button class='btn-primary'>option</button><button class='btn-primary' id='rustler11'>Rustler 11</button><button class='btn-primary' id='rustler10'>Rustler 10</button></div>");
      $('#target').html("<h2> Mindbender 98 Alliance</h2>"+k2Buttons+"<iframe src='https://www.corbetts.com/2020-k2-mindbender-98ti-alliance-womens-skis/' width=100% height=500px></iframe>");//code to display models in iframes
  }); 
    
    
     $(document).on('click', '#mindBender88', function(e){
      $('#content').html("<h2> K2</h2> <b>Similar models :</b><div class='row'><button class='btn-primary' id='core105'>Kore 105</buttonn> <button class='btn-primary'>option</button><button class='btn-primary' id='rustler11'>Rustler 11</button><button class='btn-primary' id='rustler10'>Rustler 10</button></div>");
      $('#target').html("<h2> Mindbender 88 Aliance Ti</h2>"+k2Buttons+"<iframe src='https://www.corbetts.com/2020-k2-mindbender-88ti-alliance-womens-skis/' width=100% height=500px></iframe>");//code to display models in iframes
  }); 
    
    // Head models:  -head doesn't allow calls to api-using link to magazine ski gear guide
    
    $(document).on('click','#kore93',function(e){
       $('#content').html("<h2>Head</h2> <b>Similar models :</b><div id='row'><button class='btn-primary' id='core99'>Core 99</button><buton class='btn-primary' id='sky7'>Sky 7</button><button class='btn-primary' id='qst99'>QST 99</button><button class='btn-primary' id='brahma'>Brahma</button><button class='btn-primary'>Rustler 10</button></div>");
      $('#target').html("<h2> Kore 93</h2>"+headButtons+"<iframe id='headKore93' src='https://www.corbetts.com/2020-head-kore-93-skis/' width=100% height=500px> Your Browser doesn't support iframes...</iframe><br><br><br><iframe width='100%' height='500' src='https://www.youtube.com/embed/bW-YL1kSrUg?autoplay=1' frameborder='0' allow='accelerometer; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
  
   $(document).on('click', '#kore99', function(e){
      $('#content').html("<h2>Head</h2> <b>Similar models :</b><div class='row'><button class='btn-primary' id='core105'>Kore 105</button> <button class='btn-primary' id='mindbender99'>MindBender 99 </button><button class='btn-primary' id='qst99'>Qst 99</button><button class='btn-primary' id='rustler10'>Rustler 10</button>");
      $('#target').html("<h2>Kore 99</h2>"+headButtons+"<iframe src='https://www.corbetts.com/2020-head-kore-99-skis/' width=100% height=500px></iframe>");//code to display models in iframes
  }); 
    
    
   $(document).on('click', '#kore105', function(e){
      $('#content').html("<h2>Head</h2> <b>Similar models :</b><div class='row'><button class='btn-primary' id='core105'>Kore 105</button> <button class='btn-primary' id='mindbender99'>MindBender 99 </button><button class='btn-primary' id='qst99'>Qst 99</button><button class='btn-primary' id='rustler10'>Rustler 10</button>");
      $('#target').html("<h2>Kore 105</h2>"+headButtons+"<iframe src='https://www.corbetts.com/2020-head-kore-105-skis/' width=100% height=500px></iframe>");//code to display models in iframes
  }); 
      
   $(document).on('click', '#wildJoy', function(e){
      $('#content').html("<h2>Head</h2> <b>Similar models :</b><div class='row'><button class='btn-primary' id='core105'>Kore 105</button> <button class='btn-primary' id='mindbender99'>MindBender 99 </button><button class='btn-primary' id='qst99'>Qst 99</button><button class='btn-primary' id='rustler10'>Rustler 10</button>");
      $('#target').html("<h2>Wild Joy</h2>"+headButtons+"<iframe src='https://www.corbetts.com/2019-head-wild-joy-womens-skis/' width=100% height=500px></iframe>");//code to display models in iframes
  }); 
      
      
    });
    
    
    //board models defined below:
  
    
    //   Burton Boards
     $(document).on('click','#paramount',function(e){
          console.log("clicked paramount");
       $('#content').html("<h2>Paramount</h2> <b>Similar models :</b><div id='colLinks'><button class='btn-primary' id='flagship'>Jones Flagship</button><buton class='btn-primary' id='mullair'>GNU Mullair</button><button class='btn-primary' id='mtnPig'>Ride Mountain Pig</button></div>");
      $('#target').html("<h2>Burton</h2>"+burtonButtons+"<iframe id='paramountFrame' src='https://www.burton.com/ca/en/p/mens-burton-paramount-camber-snowboard/W20-132201.html#' width=100% height=600px> Your Browser doesn't support iframes...</iframe><iframe width=100% height='500' src='https://www.youtube.com/embed/MTWp1fTu_K4' frameborder='0' allow='accelerometer; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
    });
    
    $(document).on('click','#deepThinker',function(e){
          console.log("clicked Deep THinker");
       $('#content').html("<h2>Deep Thinker</h2> <b>Similar models :</b><div id='colLinks'> <button class='btn-primary' id='mullair'>Gnu Mullair</button><buton class='btn-primary' id='eJack'>E Jack</button><button class='btn-primary' id='mtnPig'>Ride Mountain Pig</button></div>");
      $('#target').html("<h2>Burton</h2>"+burtonButtons+"<iframe id='deepThinker' src='https://www.burton.com/ca/en/p/mens-burton-deep-thinker-camber-snowboard/W20-172001.html' width=100% height=500px> Your Browser doesn't support iframes...</iframe><br><br><br><iframe width=100% height='500' src='https://www.youtube.com/embed/UmhT7OPpCVQ' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
    });
    
       $(document).on('click','#freeThinker',function(e){
          console.log("clicked ");
       $('#content').html("<h2>Free Thinker</h2> <b>Similar models :</b><div id='colLinks'><button class='btn-primary' id='helix'>Ride Helix</button></div>");
      $('#target').html("<h2>Burton</h1>"+burtonButtons+"<iframe id='freeThinker' src='https://www.burton.com/ca/en/p/mens-burton-free-thinker-snowboard/W19-132191.html' width=100% height=500px> Your Browser doesn't support iframes...</iframe><br><br><br><iframe width=100% height=500px src='https://www.youtube.com/embed/InP8B3f5W00' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
    });
      $(document).on('click','#flightAttendent',function(e){
          console.log("clicked story");
       $('#content').html("<h2>Flight Attendent</h2> <b>Similar models :</b><div id='colLinks'> <button class='btn-primary' id='mullair'>Gnu Mullair</button><buton class='btn-primary' id='eJack'>E Jack</button><button class='btn-primary' id='mtnPig'>Ride Mountain Pig</button></div>");
      $('#target').html("<h2>Burton</h2>"+burtonButtons+"<iframe id='deepThinker' src='https://www.burton.com/ca/en/p/womens-burton-rewind-camber-snowboard/W20-198541.html' width=100% height=500px> Your Browser doesn't support iframes...</iframe><br><br><br><iframe width=100% height=500px src='https://www.youtube.com/embed/UmhT7OPpCVQ' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
    });
  
     $(document).on('click','#process',function(e){
          console.log("clicked Process");
       $('#content').html("<h2>Process</h2> <b>Similar models :</b><div id='colLinks'><button class='btn-primary' id='assassin'>Salomon Assassin</button><buton class='btn-primary' id='machette'>Ride Machette</button></div>");
      $('#target').html("<h2>Burton</h2>"+burtonButtons+"<iframe id='process' src='https://www.burton.com/ca/en/p/mens-burton-process-flying-v-snowboard/W19-107121.html' width=100% height=500px> Your Browser doesn't support iframes...</iframe><br><br><br><iframe width=100% height='500' src='https://www.youtube.com/embed/14tsIep9tzw' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
    });
    
     $(document).on('click','#talentScout',function(e){
          console.log("clicked Talent Scout");
       $('#content').html("<h2>Talent Scout</h2><b>Similar models :</b><div id='colLinks'><button class='btn-primary' id='rumbleFish'>Salomon Rumble Fish</button></div>");
      $('#target').html("<h2>Burton</h2>"+burtonButtons+"<iframe id='talentScout' src='https://www.burton.com/ca/en/p/womens-burton-talent-scout-snowboard/W19-132181.html' width=100% height=600px> Your Browser doesn't support iframes...</iframe><br>br><br><iframe width=100% height='500' src='https://www.youtube.com/embed/XN69D5mqzV0' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
    });
    $(document).on('click','#yeaSayer',function(e){
          console.log("clicked yea");
       $('#content').html("<h2>Yea Sayer</h2> <b>Similar models :</b><div id='colLinks'><button class='btn-primary' id='mullair'>Gnu Mullair</button><buton class='btn-primary' id='eJack'>E Jack</button><button class='btn-primary' id='mtnPig'>Ride Mountain Pig</button></div>");
      $('#target').html("<h2>Burton</h2>"+burtonButtons+"<iframe id='deepThinker' src='https://www.burton.com/ca/en/p/womens-burton-yeasayer-flying-v-snowboard/W20-107081.html?color=10708106000140' width=100% height=500px> Your Browser doesn't support iframes...</iframe><br><br><br><iframe width=100% height='500' src='https://www.youtube.com/embed/UmhT7OPpCVQ' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
    });
    
    $(document).on('click','#storyBoard',function(e){
          console.log("clicked story");
       $('#content').html("<h2>Story Board</h2> <b>Similar models :</b><div id='colLinks'><button class='btn-primary' id='mullair'>Gnu Mullair</button><buton class='btn-primary' id='eJack'>E Jack</button><button class='btn-primary' id='mtnPig'>Ride Mountain Pig</button></div>");
      $('#target').html("<h2>Burton</h2>"+burtonButtons+"<iframe id='deepThinker' src='https://www.burton.com/ca/en/p/burton-family-tree-story-board-camber-snowboard/W20-209651.html' width=100% height=500px> Your Browser doesn't support iframes...</iframe><br><br><br><iframe width=100% height='500' src='https://www.youtube.com/embed/UmhT7OPpCVQ' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
    });
    $(document).on('click','#rewind',function(e){
          console.log("clicked story");
       $('#content').html("<h2>Rewind</h2> <b>Similar models :</b><div id='colLinks'> <button class='btn-primary' id='mullair'>Gnu Mullair</button><buton class='btn-primary' id='eJack'>E Jack</button><button class='btn-primary' id='mtnPig'>Ride Mountain Pig</button></div>");
      $('#target').html("<h2>Burton</h2>"+burtonButtons+"<iframe id='deepThinker' src='https://www.burton.com/ca/en/p/womens-burton-rewind-camber-snowboard/W20-198541.html' width=100% height=500px> Your Browser doesn't support iframes...</iframe><br><br><br><iframe width=100% height='500' src='https://www.youtube.com/embed/UmhT7OPpCVQ' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
    });
    
    
    
    //   Salomon Boards
    
     $(document).on('click','#sickStick',function(e){
          console.log("clicked sickStick");
       $('#content').html("<h2>Sick Stick</h2><b>Similar models :</b><div id='colLinks'><button class='btn-primary' id='flagship'>Jones Flagship</button><buton class='btn-primary' id='mullair'>GNU Mullair</button><button class='btn-primary' id='mtnPig'>Ride Mountain Pig</button></div>");
      $('#target').html("<h2>Salomon</h2>"+salomonSBButtons+"<iframe id='sickStickFrame' src='https://www.salomon.com/en-ca/shop/product/sickstick.html#1191=19152' width=100% height=500px> Your Browser doesn't support iframes...</iframe><br><br><br><iframe width='100%' height='500' src='https://www.youtube.com/embed/MTWp1fTu_K4' frameborder='0' allow='accelerometer; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
    });
    
    
     $(document).on('click','#pillowTalk',function(e){
          console.log("clicked pillow");
       $('#content').html("<h2>Pillow Talk</h2><b>Similar models :</b><div id='colLinks'><button class='btn-primary' id='flagship'>Jones Flagship</button><buton class='btn-primary' id='mullair'>GNU Mullair</button><button class='btn-primary' id='mtnPig'>Ride Mountain Pig</button></div>");
      $('#target').html("<h2>Salomon</h2>"+salomonSBButtons+"<iframe id='pillowFrame' src='https://www.salomon.com/en-ca/shop/product/pillow-talk.html#1191=19175' width=100% height=600px> Your Browser doesn't support iframes...</iframe><br><br><br><iframe width=100% height='500' src='https://www.youtube.com/embed/MTWp1fTu_K4' frameborder='0' allow='accelerometer; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
    });
    
    
     $(document).on('click','#assassin',function(e){
          console.log("clicked assaas");
       $('#content').html("<h2>Assassin</h2><b>Similar models :</b><div id='colLinks'><button class='btn-primary' id='flagship'>Jones Flagship</button><buton class='btn-primary' id='mullair'>GNU Mullair</button><button class='btn-primary' id='mtnPig'>Ride Mountain Pig</button></div>");
      $('#target').html("<h2>Salomon</h2>"+salomonSBButtons+"<iframe id='assassinFrame' src='https://www.salomon.com/en-ca/shop/product/assassin.html#1191=19101' width=100% height=600px> Your Browser doesn't support iframes...</iframe><br><br><br><iframe width='560' height='415' src='https://www.youtube.com/embed/MTWp1fTu_K4' frameborder='0' allow='accelerometer; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
    });
    
    
     $(document).on('click','#firstCall',function(e){
          console.log("clicked assaas");
       $('#content').html("<h2>FirstCall</h2><b>Similar models :</b><div id='colLinks'><button class='btn-primary' id='flagship'>Jones Flagship</button><buton class='btn-primary' id='mullair'>GNU Mullair</button><button class='btn-primary' id='mtnPig'>Ride Mountain Pig</button></div>");
      $('#target').html("<h2>Salomon</h2>"+salomonSBButtons+"<iframe id='assassinFrame' src='https://www.salomon.com/en-ca/shop/product/first-call.html#1191=19178' width=100% height=600px> Your Browser doesn't support iframes...</iframe><br><br><br><iframe width='100%' height='500' src='https://www.youtube.com/embed/MTWp1fTu_K4' frameborder='0' allow='accelerometer; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
    });
    
     $(document).on('click','#rumbleFish',function(e){
          console.log("clicked rumble");
       $('#content').html("<h2>Rumble Fish</h2><b>Similar models :</b><div id='colLinks'><button class='btn-primary' id='flagship'>Jones Flagship</button><buton class='btn-primary' id='mullair'>GNU Mullair</button><button class='btn-primary' id='mtnPig'>Ride Mountain Pig</button></div>");
      $('#target').html("<h2>Salomon</h2>"+salomonSBButtons+"<iframe id='assassinFrame' src='https://www.salomon.com/en-ca/shop/product/rumble-fish.html#1191=19103' width=100% height=600px> Your Browser doesn't support iframes...</iframe><br><Br><br><iframe width='100%' height='415' src='https://www.youtube.com/embed/MTWp1fTu_K4' frameborder='0' allow='accelerometer; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
    });
    
     $(document).on('click','#bellevue',function(e){
          console.log("clicked rumble");
       $('#content').html("<h2>Bellevue</h2><b>Similar models :</b><div id='colLinks'><button class='btn-primary' id='flagship'>Jones Flagship</button><buton class='btn-primary' id='mullair'>GNU Mullair</button><button class='btn-primary' id='mtnPig'>Ride Mountain Pig</button></div>");
      $('#target').html("<h2>Salomon</h2>"+salomonSBButtons+"<iframe id='assassinFrame' src='https://www.salomon.com/en-ca/shop/product/bellevue.html#1191=19104' width=100% height=600px> Your Browser doesn't support iframes...</iframe><br><Br><br><iframe width='100%' height='415' src='https://www.youtube.com/embed/MTWp1fTu_K4' frameborder='0' allow='accelerometer; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
    });
    
    //Jones Snowboard Models
    
    
     $(document).on('click','#flagShip',function(e){
          console.log("clicked Flag");
       $('#content').html("<h2>Flag Ship</h2><b>Similar models :</b><div id='colLinks'><button class='btn-primary' id='flagship'>Jones Flagship</button><buton class='btn-primary' id='mullair'>GNU Mullair</button><button class='btn-primary' id='mtnPig'>Ride Mountain Pig</button></div>");
      $('#target').html("<h2>Jones</h2>"+jonesButtons+"<iframe id='flagFrame' src='https://www.jonessnowboards.com/en-CA/gear/mens-snowboards/Flagship.html#01' width=100% height=600px> Your Browser doesn't support iframes...</iframe><br><Br><br><iframe width='100%' height='415' src='https://www.youtube.com/embed/MTWp1fTu_K4' frameborder='0' allow='accelerometer; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
    });
    
     $(document).on('click','#ultraMindExpander',function(e){
          console.log("clicked ultra xpandr");
       $('#content').html("<h2>Ultra Mind Expander</h2><b>Similar models :</b><div id='colLinks'><button class='btn-primary' id='flagship'>Jones Flagship</button><buton class='btn-primary' id='mullair'>GNU Mullair</button><button class='btn-primary' id='mtnPig'>Ride Mountain Pig</button></div>");
      $('#target').html("<h2>Jones Snowboards</h2>"+jonesButtons+"<iframe id='assassinFrame' src='https://www.jonessnowboards.com/en-CA/gear/mens-snowboards/ultra-mind-expander.html#01' width=100% height=600px> Your Browser doesn't support iframes...</iframe><br><Br><br><iframe width='100%' height='415' src='https://www.youtube.com/embed/MTWp1fTu_K4' frameborder='0' allow='accelerometer; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
    });
    
     $(document).on('click','#mindExpander',function(e){
          console.log("clicked xpandr");
       $('#content').html("<h2>Mind Expander</h2><b>Similar models :</b><div id='colLinks'><button class='btn-primary' id='flagship'>Jones Flagship</button><buton class='btn-primary' id='mullair'>GNU Mullair</button><button class='btn-primary' id='mtnPig'>Ride Mountain Pig</button></div>");
      $('#target').html("<h2>Jones</h2>"+jonesButtons+"<iframe id='assassinFrame' src='https://www.jonessnowboards.com/en-CA/gear/mens-snowboards/mind-expander.html#01' width=100% height=600px> Your Browser doesn't support iframes...</iframe><br><Br><br><iframe width='100%' height='415' src='https://www.youtube.com/embed/MTWp1fTu_K4' frameborder='0' allow='accelerometer; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
    });
  
     $(document).on('click','#dreamCatcher',function(e){
          console.log("clicked dream Catch");
       $('#content').html("<h2>Dream Catcherr</h2><b>Similar models :</b><div id='colLinks'><button class='btn-primary' id='flagship'>Jones Flagship</button><buton class='btn-primary' id='mullair'>GNU Mullair</button><button class='btn-primary' id='mtnPig'>Ride Mountain Pig</button></div>");
      $('#target').html("<h2>Jones</h2>"+jonesButtons+"<iframe id='assassinFrame' src='https://www.jonessnowboards.com/en-CA/gear/womens-snowboards/dream-catcher.html#01' width=100% height=600px> Your Browser doesn't support iframes...</iframe><br><Br><br><iframe width='100%' height='500' src='https://www.youtube.com/embed/MTWp1fTu_K4' frameborder='0' allow='accelerometer; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
    });
    $(document).on('click','#mindExpanderWomen',function(e){
          console.log("clicked dream Catch");
       $('#content').html("<h2>Mind Expander Womens</h2><b>Similar models :</b><div id='colLinks'><button class='btn-primary' id='flagship'>Jones Flagship</button><buton class='btn-primary' id='mullair'>GNU Mullair</button><button class='btn-primary' id='mtnPig'>Ride Mountain Pig</button></div>");
      $('#target').html("<h2>Jones</h2>"+jonesButtons+"<iframe id='assassinFrame' src='https://www.jonessnowboards.com/en-CA/gear/womens-snowboards/' width=100% height=600px> Your Browser doesn't support iframes...</iframe><iframe width='100%'' height='500' src='https://www.youtube.com/embed/MTWp1fTu_K4' frameborder='0' allow='accelerometer; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
    });
    
    // Ride Snowboard Models - not allowing api calls
    
    $(document).on('click','#berzerker',function(e){
          console.log("clicked berzerker");
       $('#content').html("<h2>Berzerker</h2><b>Similar models :</b><div id='colLinks'><button class='btn-primary' id='flagship'>Jones Flagship</button><buton class='btn-primary' id='mullair'>GNU Mullair</button><button class='btn-primary' id='mtnPig'>Ride Mountain Pig</button></div>");
      $('#target').html("<h2>Ride Snowboards</h2>"+rideButtons+"<iframe id='berzFrame' src='https://www.corbetts.com/2019-ride-berzerker-mens-snowboard/' width=100% height=600px> Your Browser doesn't support iframes...</iframe><br><Br><br><iframe width='100%' height='500' src='https://www.youtube.com/embed/MTWp1fTu_K4' frameborder='0' allow='accelerometer; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
    });
    
    $(document).on('click','#warPig',function(e){
          console.log("clicked warPig");
       $('#content').html("<h2>WarPig</h2><b>Similar models :</b><div id='colLinks'><button class='btn-primary' id='flagship'>Jones Flagship</button><buton class='btn-primary' id='mullair'>GNU Mullair</button><button class='btn-primary' id='mtnPig'>Ride Mountain Pig</button></div>");
      $('#target').html("<h2>Ride Snowboards</h2>"+rideButtons+"<iframe id='warFrame' src='https://www.corbetts.com/2020-ride-warpig-mens-snowboard/' width=100% height=600px> Your Browser doesn't support iframes...</iframe><br><Br><br><iframe width='100%' height='415' src='https://www.youtube.com/embed/MTWp1fTu_K4' frameborder='0' allow='accelerometer; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
    });
    $(document).on('click','#twinPig',function(e){
          console.log("clicked twinPig");
       $('#content').html("<h2>TwinPig</h2><b>Similar models :</b><div id='colLinks'><button class='btn-primary' id='flagship'>Jones Flagship</button><buton class='btn-primary' id='mullair'>GNU Mullair</button><button class='btn-primary' id='mtnPig'>Ride Mountain Pig</button></div>");
      $('#target').html("<h2>Ride Snowboards</h2>"+rideButtons+"<iframe id='warFrame' src='https://www.corbetts.com/2020-ride-warpig-mens-snowboard/' width=100% height=600px> Your Browser doesn't support iframes...</iframe><br><Br><br><iframe width='100%' height='415' src='https://www.corbetts.com/2020-ride-twinpig-mens-snowboard/' frameborder='0' allow='accelerometer; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
    });
    $(document).on('click','#psychoCandy',function(e){
          console.log("clicked psycho");
       $('#content').html("<h2>PsychoCandy</h2><b>Similar models :</b><div id='colLinks'><button class='btn-primary' id='flagship'>Jones Flagship</button><buton class='btn-primary' id='mullair'>GNU Mullair</button><button class='btn-primary' id='mtnPig'>Ride Mountain Pig</button></div>");
      $('#target').html("<h2>Ride Snowboards</h2>"+rideButtons+"<iframe id='warFrame' src='https://ridesnowboards.com/en-ca/p/psychocandy-snowboard' width=100% height=600px> Your Browser doesn't support iframes...</iframe><iframe width='100%' height='415' src='https://www.corbetts.com/2020-ride-twinpig-mens-snowboard/' frameborder='0' allow='accelerometer; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
    });
    
   // Lib Tech Board models  - lib site not allowing api calls
     $(document).on('click','#tRiceGold',function(e){
          console.log("clicked T rice Gold Memeber");
       $('#content').html("<h2>Travice Rice Gold Member HP C2</h2><b>Similar models :</b><div id='colLinks'><button class='btn-primary' id='flagship'>Jones Flagship</button><buton class='btn-primary' id='mullair'>GNU Mullair</button><button class='btn-primary' id='mtnPig'>Ride Mountain Pig</button></div>");
      $('#target').html("<h2>Lib Tech Snowboards</h2>"+libTechButtons+"<iframe id='goldFrame' src='https://www.corbetts.com/2020-lib-tech-t-rice-goldmember-fp-c2x-mens-snowboard/' width=100% height=600px> Your Browser doesn't support iframes...</iframe><br><Br><br><iframe width='100%' height='415' src='https://www.youtube.com/embed/MTWp1fTu_K4' frameborder='0' allow='accelerometer; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
    });
      $(document).on('click','#tRiceOrca',function(e){
          console.log("clicked T rice Orca");
       $('#content').html("<h2>Travice Rice Orca </h2><b>Similar models :</b><div id='colLinks'><button class='btn-primary' id='flagship'>Jones Flagship</button><buton class='btn-primary' id='mullair'>GNU Mullair</button><button class='btn-primary' id='mtnPig'>Ride Mountain Pig</button></div>");
      $('#target').html("<h2>Lib Tech Snowboards</h2>"+libTechButtons+"<iframe id='orcaFrame' src='https://www.corbetts.com/2020-lib-tech-t-rice-orca-c2x-mens-snowboard/' width=100% height=600px> Your Browser doesn't support iframes...</iframe><br><Br><br><iframe width='100%' height='415' src='https://www.youtube.com/embed/MTWp1fTu_K4' frameborder='0' allow='accelerometer; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
    });
    
      $(document).on('click','#tRas',function(e){
          console.log("clicked T ras");
       $('#content').html("<h2>T Ras C2 </h2><b>Similar models :</b><div id='colLinks'><button class='btn-primary' id='flagship'>Jones Flagship</button><buton class='btn-primary' id='mullair'>GNU Mullair</button><button class='btn-primary' id='mtnPig'>Ride Mountain Pig</button></div>");
      $('#target').html("<h2>Lib Tech Snowboards</h2>"+libTechButtons+"<iframe id='rasFrame' src='https://www.corbetts.com/2020-lib-tech-t-ras-c2-mens-snowboard/' width=100% height=600px> Your Browser doesn't support iframes...</iframe><br><Br><br><iframe width='100%' height='415' src='https://www.youtube.com/embed/MTWp1fTu_K4' frameborder='0' allow='accelerometer; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
    });
    
      $(document).on('click','#eJack',function(e){
          console.log("clicked eJack");
       $('#content').html("<h2>E Jack C3 </h2><b>Similar models :</b><div id='colLinks'><button class='btn-primary' id='flagship'>Jones Flagship</button><buton class='btn-primary' id='mullair'>GNU Mullair</button><button class='btn-primary' id='mtnPig'>Ride Mountain Pig</button></div>");
      $('#target').html("<h2>Lib Tech Snowboards</h2>"+libTechButtons+"<iframe id='iJFrame' src='https://www.corbetts.com/2020-lib-tech-e-jack-knife-c3-mens-snowboard/' width=100% height=600px> Your Browser doesn't support iframes...</iframe><br><Br><br><iframe width='100%' height='415' src='https://www.youtube.com/embed/MTWp1fTu_K4' frameborder='0' allow='accelerometer; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
    });
    
      $(document).on('click','#dynaMiss',function(e){
          console.log("clicked eJack");
       $('#content').html("<h2>DynaMiss C3 </h2><b>Similar models :</b><div id='colLinks'><button class='btn-primary' id='flagship'>Jones Flagship</button><buton class='btn-primary' id='mullair'>GNU Mullair</button><button class='btn-primary' id='mtnPig'>Ride Mountain Pig</button></div>");
      $('#target').html("<h2>Lib Tech Snowboards</h2>"+libTechButtons+"<iframe id='iJFrame' src='https://www.corbetts.com/2020-lib-tech-dynamiss-c3-womens-snowboard/' width=100% height=600px> Your Browser doesn't support iframes...</iframe><br><Br><br><iframe width='100%' height='415' src='https://www.youtube.com/embed/MTWp1fTu_K4' frameborder='0' allow='accelerometer; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
    });
    
    
    // GNU Board models 
    
      $(document).on('click','#ridersChoice',function(e){
          console.log("clicked riders");
       $('#content').html("<h2>Asym Rider's Choice C2X </h2><b>Similar models :</b><div id='colLinks'><button class='btn-primary' id='flagship'>Jones Flagship</button><buton class='btn-primary' id='mullair'>GNU Mullair</button><button class='btn-primary' id='mtnPig'>Ride Mountain Pig</button></div>");
      $('#target').html("<h2>GNU Snowboards</h2>"+gnuButtons+"<iframe id='iriderJFrame' src='https://www.corbetts.com/2020-gnu-riders-choice-c2x-asym-mens-snowboard/' width=100% height=600px> Your Browser doesn't support iframes...</iframe><br><Br><br><iframe width='100%' height='415' src='https://www.youtube.com/embed/MTWp1fTu_K4' frameborder='0' allow='accelerometer; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
    });
    
      $(document).on('click','#mullair',function(e){
          console.log("clicked mullair");
       $('#content').html("<h2>Mullair C3 </h2><b>Similar models :</b><div id='colLinks'><button class='btn-primary' id='flagship'>Jones Flagship</button><buton class='btn-primary' id='mullair'>GNU Mullair</button><button class='btn-primary' id='mtnPig'>Ride Mountain Pig</button></div>");
      $('#target').html("<h2>GNU Snowboards</h2>"+gnuButtons+"<iframe id='iriderJFrame' src='https://www.corbetts.com/2020-gnu-mullair-c3-mens-snowboard/' width=100% height=600px> Your Browser doesn't support iframes...</iframe><br><Br><br><iframe width='100%' height='415' src='https://www.youtube.com/embed/MTWp1fTu_K4' frameborder='0' allow='accelerometer; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
    });
    
      $(document).on('click','#proChoice',function(e){
          console.log("clicked proChoice");
       $('#content').html("<h2>Pro Choice C3 </h2><b>Similar models :</b><div id='colLinks'><button class='btn-primary' id='flagship'>Jones Flagship</button><buton class='btn-primary' id='mullair'>GNU Mullair</button><button class='btn-primary' id='mtnPig'>Ride Mountain Pig</button></div>");
      $('#target').html("<h2>GNU Snowboards</h2>"+gnuButtons+"<iframe id='iriderJFrame' src='https://www.corbetts.com/2020-gnu-pro-choice-c3-asym-womens-snowboard/' width=100% height=600px> Your Browser doesn't support iframes...</iframe><br><Br><br><iframe width=100% height='415' src='https://www.youtube.com/embed/MTWp1fTu_K4' frameborder='0' allow='accelerometer; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
    });
    
    
      $(document).on('click','#ladiesChoice',function(e){
          console.log("clicked ladies Choice");
       $('#content').html("<h2>Ladies Choice C2X </h2><b>Similar models :</b><div id='colLinks'><button class='btn-primary' id='flagship'>Jones Flagship</button><buton class='btn-primary' id='mullair'>GNU Mullair</button><button class='btn-primary' id='mtnPig'>Ride Mountain Pig</button></div>");
      $('#target').html("<h2>GNU Snowboards</h2>"+gnuButtons+"<iframe id='iriderJFrame' src='https://www.corbetts.com/2020-gnu-ladies-choice-c2x-asym-womens-snowboard/' width=100% height=600px> Your Browser doesn't support iframes...</iframe><br><Br><br><iframe width='100%' height='415' src='https://www.youtube.com/embed/MTWp1fTu_K4' frameborder='0' allow='accelerometer; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
    });
    
  });
  