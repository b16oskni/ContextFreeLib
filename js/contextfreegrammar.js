/*
 * ContextFreeGrammar generates sentences based on the following parameters:
 *
    {
       "probabilityNounPhrase":0.5,
       "probabilityVerbPhrase":0.5,
       "probabilityDualAdjectives":0.5,
       "probabilityStartAdjective":0.5,
       "distributionOfNouns":"normal",
       "distributionOfVerbs":"normal",
       "distributionOfAdjectives":"normal",
       "distributionOfAdverbs":"normal",
       "distributionOfDeterminers":"normal",
       "distributionOfConjunctions":"normal",
       "distributionOfModals":"normal",
       "randomSeed":1
     }
 *
 * Distributions supported: normal,uniform,uni-squared,chi-squared
 */	
var ContextFreeGrammar=function(params)
{ 
    if(typeof params === "undefined"){
        params={};
    }
    
    if(typeof params.probabilityNounPhrase === "undefined"){
        params.probabilityNounPhrase=0.5;
    }
    var probnounphrase = params.probabilityNounPhrase;
    
    if(typeof params.probabilityVerbPhrase === "undefined"){
        params.probabilityVerbPhrase=0.5;
    }
    var probverbphrase = params.probabilityVerbPhrase;
    
    if(typeof params.probabilityDualAdjectives === "undefined"){
        params.probabilityDualAdjectives=0.5;
    }
    var probdualajdectives = params.probabilityDualAdjectives;
    
    if(typeof params.probabilityStartAdjective === "undefined"){
        params.probabilityStartAdjective=0.5;
    }
    var probstartadj = params.probabilityStartAdjective;

    if(typeof params.distributionOfNouns === "undefined"){
        params.distributionOfNouns="normal";
    }
    var distributionnouns = params.distributionOfNouns;
    
    if(typeof params.distributionOfVerbs === "undefined"){
        params.distributionOfVerbs="normal";
    }
    var distributionverbs = params.distributionOfVerbs;
    
    if(typeof params.distributionOfAdjectives === "undefined"){
        params.distributionOfAdjectives="normal";
    }
    var distributionadjectives = params.distributionOfAdjectives;
    
    if(typeof params.distributionOfAdverbs === "undefined"){
        params.distributionOfAdverbs="normal";
    }
    var distributionadverbs = params.distributionOfAdverbs;
    
    if(typeof params.distributionOfDeterminers === "undefined"){
        params.distributionOfDeterminers="normal";
    }
    var distributiondeterminers = params.distributionOfDeterminers;
    
    if(typeof params.distributionOfConjunctions === "undefined"){
        params.distributionOfConjunctions="normal";
    }
    var distributionconjunctions = params.distributionOfConjunctions;
    
    if(typeof params.distributionOfModals === "undefined"){
        params.distributionOfModals="normal";
    }
    var distributionmodals = params.distributionOfModals;    
    
    if(typeof params.randomSeed === "undefined"){
        params.randomSeed=Math.floor(new Date() / 1000);;
    }
    var seed = params.randomSeed;    
      
    this.determiner=["another","other","different","a","the","zero","one","two","a million","a gazillion","fifty","infinite","many","much","few","little","a couple of","several","most","this","that","these","those","which","either","neither","each","every","any","whichever","the same","such","that","so","some","any","which","what","whichever","whatever","a lot of","many","several","much","no","neither","a few","a little","some","my","your","our","his","her","all","many","several","each","any","no","enough","sufficient","plenty","the only","the","this","that","these","those","all","both"];
    this.conjunction=["and","nor","but","or","yet","both","equally"];
    this.modal=["ed","s","does","did","can","shall","will","may","could","should","would","might","had","must","did"];
    this.verb=["warn","encourage","arrange","obtain","skip","spot","treat","spray","disagree","stay","check","claim","tame","welcome","yawn","phone","strip","wriggle","drop","expect","pray","strap","place","soak","delight","reject","empty","stroke","program","paint","concentrate","untidy","snore","deliver","hand","wish","crush","carve","offer","stop","bathe","decay","rush","avoid","tip","crack","brush","sneeze","license","squeal","water","trouble","hang","rejoice","fancy","waste","inject","harass","reproduce","overflow","repair","sip","slip","realise","sound","roll","interest","post","clip","permit","shave","unpack","need","puncture","smile","hum","moor","sigh","frame","tease","employ","bare","knit","accept","greet","drip","fool","satisfy","sin","interrupt","reply","memorise","pour","whine","reflect","delay","brake","move","fry","report","communicate","pine","end","grab","notice","stare","fasten","prepare","fade","mate","own","excuse","suck","scold","practise","support","count","confess","concern","radiate","pause","squeak","balance","heal","explain","whisper","branch","wreck","fill","explode","weigh","travel","time","paddle","order","scrape","enjoy","challenge","discover","vanish","punish","describe","curl","colour","coil","dislike","desert","admire","long","mine","store","subtract","saw","charge","squeeze","print","command","chew","scratch","head","queue","plan","lighten","cry","receive","stuff","lock","mix","haunt","bruise","irritate","guarantee","bow","arrive","suit","marry","handle","pat","produce","appreciate","doubt","repeat","deserve","escape","wail","glue","signal","film","gather","complain","man","rot","mug","fit","mess up","exist","curve","tickle","allow","cheer","alert","mourn","whirl","touch","reign","applaud","stretch","observe","rain","hover","bury","use","obey","serve","lick","impress","milk","guess","shock","dress","love","dam","join","pretend","close","slow","name","wobble","beam","groan","improve","telephone","blush","confuse","rule","prick","calculate","return","snow","march","trace","disapprove","tremble","melt","land","stitch","identify","turn","suspect","crawl","rob","bomb","intend","pack","chop","blot","peel","shelter","remove","glow","flash","continue","hunt","share","belong","ruin","grate","pinch","consist","remember","breathe","squash","poke","embarrass","trot","grease","cheat","terrify","like","offend","trade","pedal","warm","request","lie","undress","tire","jam","bang","rinse","include","care","change","rely","follow","grin","train","enter","shade","matter","drum","moan","heat","prevent","open","spill","argue","present","crash","seal","step","suspend","contain","decorate","suggest","fold","complete","preach","spare","wave","form","ban","excite","educate","afford","beg","fail","attach","annoy","face","zoom","force","compete","fetch","surprise","scare","kill","switch","apologise","approve","develop","push","bump","prefer","sparkle","cause","shiver","talk","paste","transport","wonder","bolt","tow","succeed","multiply","nail","snatch","sail","burn","disappear","preserve","spell","knot","refuse","invite","flood","fix","stir","meddle","x-ray","scrub","introduce","sniff","peck","start","search","promise","wander","suppose","blink","murder","trip","scatter","supply","record","park","ski","instruct","visit","number","heap","strengthen","grip","coach","buzz","plug","sign","surround","wipe","wink","ignore","part","help","flap","amuse","float","gaze","whip","load","clean","taste","list","harm","cover","dust","jail","type","perform","attack","wrestle","damage","drown","drain","inform","hammer","examine","appear","slap","shop","announce","soothe","box","play","blind","recognise","tie","muddle","depend","wait","agree","kiss","judge","disarm","punch","boast","guide","interfere","relax","increase","look","polish","mark","point","remind","injure","rock","dare","advise","analyse","unlock","settle","smoke","chase","match","dry","tick","want","occur","measure","decide","mend","object","hope","precede","double","trust","unfasten","replace","book","regret","pump","release","bore","race","miss","jog","tour","destroy","reach","laugh","provide","hate","battle","influence","fire","live","shrug","smash","back","separate","possess","remain","twist","extend","rhyme","flower","arrest","attend","trick","copy","walk","spark","correct","whistle","sack","file","pick","stain","hook","fear","invent","drag","unite","hop","last","frighten","yell","answer","cross","connect","knock","found","watch","add","entertain","retire","exercise","rescue","divide","bleach","trap","cure","bounce","save","rub","worry","smell","fax","zip","comb","dream","attempt","question","plant","spoil","tug","compare","fence","itch","scorch","try","listen","behave","choke","please","kneel","manage","detect","scribble","bake","test","clap","guard","tumble","suffer","joke","pop","reduce","bat","scream","hurry","owe","carry","wash","launch","nest","ask","flow","camp","thaw","risk","bless","sprout","note","pass","hug","pull","work","earn","protect","press","happen","dance","tap","wrap","cycle","imagine","stamp","expand","juggle","raise","deceive","bubble","nod","consider","collect","jump","borrow","peep","attract","boil","cough","learn","kick","thank","call","clear","admit","steer","tempt","label","screw","level"];    
    this.noun=["bedroom","song","structure","pickle","nut","plane","room","dust","carpenter","camp","office","grape","fuel","cap","minister","pest","morning","scarecrow","trip","test","stream","month","summer","tub","baseball","cast","dime","arm","rake","money","hen","straw","head","cobweb","geese","cat","glove","edge","actor","daughter","space","substance","flower","self","sound","fang","fight","toe","fork","kitten","rabbit","bean","swing","oranges","mitten","fog","class","nose","pleasure","flesh","feather","river","celery","van","scale","badge","robin","sweater","gate","mountain","alarm","pollution","cake","donkey","wealth","oatmeal","cherry","joke","faucet","summer","airplane","reward","scissors","believe","rain","lettuce","zipper","club","songs","kite","kiss","kick","sea","grandmother","jam","moon","veil","juice","stomach","frame","hill","fruit","queen","boundary","pig","drug","giraffe","shape","limit","fiction","loaf","face","toothache","tramp","rate","railway","sponge","flag","hope","education","beginner","boy","creature","notebook","voice","meeting","bird","coach","team","hose","riddle","linen","wrist","grim reaper","mint","plantation","fifth","quicksand","library","family","cat","brick","value","help","recess","parent","soda","icicle","son","stove","street","wing","flock","deer","winter","sea","railway","sack","mongrel","pan","pail","show","apparel","governor","ladybug","wool","lift","weather","afterthought","achieve","meal","hook","note","step","acoustics","shop","water","grandmother","umbrella","grandfather","man","island","hope","zoo","history","day","pie","line","volleyball","beam","anger","cellar","interest","rat","owner","holiday","order","faucet","pot","swim","chin","sweater","celery","sugar","lunch","space","road","wilderness","garden","Steve Jobs","linen","pencil","feet","meal","name","sun","trail","passenger","rifle","arithmetic","toothpaste","screw","milk","volcano","hen","able","ball","rock","cabbage","hobbies","judge","friends","cellar","zebra","spiders","opinion","cub","front","grain","foot","town","surprise","bed","offer","furniture","hairspray","bead","sofa","fog","magic","spade","suit","cattle","hall","nest","station","ghost","brother","week","knot","haircut","vein","beggar","beast","bushes","galley","vegetable","year","eye","balloon","pear","underwear","book","Ipad","income","thread","cars","secretary","hill","zephyr","glue","lawyer","horn","death","brush","hole","water","approval","view","kitty","stream","smoke","sister","wish","underwear","thrill","reaction","metal","girls","grandfather","appliance","language","fold","liquid","grain","food","soup","mother","battle","flower","stranger","hydrant","soda","children","moon","carpenter","stench","owl","veil","book","hate","corn","ache","government","gate","feast","crate","lettuce","plot","wrench","caption","clover","cause","animal","force","furniture","volcano","wheel","farm","friction","crowd","pail","grade","argument","throne","number","slave","elbow","governor","route","sidewalk","stranger","kite","crayon","education","reason","carriage","servant","morning","glass","answer","tent","straw","beetle","heart","horn","father","dirt","food","playground","beef","advice","sheet","jellyfish","throat","motion","aftermath","bread","apple","cream","police","scent","texture","map","cactus","breakfast","popcorn","visitor","suit","patch","doctor","afternoon","sink","lumber","bath","lamp","dad","sail","great uncle","cats","arch","effect","kettle","cart","measure","cave","kiss","cemetery","spark","volleyball","game","story","ocean","plant","good-bye","oven","writer","insurance","yard","seed","range","circle","sock","horse","frog","game","table","digestion","trick","oatmeal","title","meat","bun","unit","swing","cable","dust","snake","giants","cannon","sofa","health","notebook","monkey","system","cracker","arithmetic","feeling","font","holiday","basket","dress","cent","stocking","goldfish","can","girl","brain","oil","tank","key","rainstorm","instrument","apple","home","jar","bike","invention","development","calculator","heat","string","action","channel","jeans","string","spark","frame","rainstorm","lizard","hearing","territory","dog","coil","jail","zinc","stone","level","girl","scene","soap","butter","spy","bomb","light","guide","mom","toes","doll","selection","cow","vase","earthquake","hot","elbow","car","pet","rain","fear","stew","lightning bolt","mailbox","receipt","bucket","vest","dock","park","bubble","geese","wood","niece","finger","goose","cattle","turkey","seat","fuel","lunchroom","stove","seashore","lake","hobbies","hook","pear","birthday","shoe","spoon","temper","boot","banana","vacation","tiger","knife","summer","snow","winter","throne","squirrel","crown","bat","fowl","ray","song","form","treatment","owl","goldfish","farmer","friction","knowledge","toothbrush","stage","goose","feather","desk","lace","stretch","crook","heat","son","giraffe","flavor","mother","clam","earthquake","airport","downtown","sense","plastic","aunt","van","chicken","operation","friend","organization","flowers","mice","music","basketball","cloth","creator","voyage","branch","hair","rat","orange","pancake","umbrella","laborer","heart","partner","scarf","sun","wren","list","fly","calendar","cup","marble","twig","home","coast","grade","eggnog","dinner","skate","field","activity","feet","seashore","boy","bait","kite","locket","seed","insect","maid","mountain","scale","tree","ornament","cemetery","guitar","rake","crow","frog","spot","rose","support","health","honey","society","crib","army","light","sort","north","poison","border","street","quiet","tray","drum","pinkie","month","vest","quilt","science","recess","cast","vegetable","vase","use","feast","picture","rail","honey","lock","pocket","hat","reading","pen","ghost","toad","uncle","memory","star","lip","fang","grass","voyage","gun","visitor","fan","knee","idea","goose","stealth yacht","cave","mask","sleet","number","snail","observation","ocean","fireman","mother"];
    this.adjective=["squalid","misty","woozy","ignorant","damaged","wretched","invincible","smart","earthy","elastic","soft","dizzy","round","excellent","alluring","stupid","diligent","easy","vacuous","grotesque","flaky","prickly","tender","telling","imaginary","mute","cloistered","frequent","quickest","profuse","measly","puffy","wacky","auspicious","obedient","deeply","ragged","poised","steadfast","determined","accurate","lame","inconclusive","dull","humdrum","exciting","romantic","secret","innocent","narrow","cheap","truthful","instinctive","evanescent","elated","befitting","joyous","neighborly","imperfect","jobless","defeated","thin","boiling","ruddy","low","shaky","troubled","blue","charming","needless","intelligent","scarce","uppity","damaging","rhetorical","extra-large","trite","lamentable","present","disturbed","stingy","disastrous","curious","oafish","abounding","bewildered","miniature","wanting","unknown","fancy","five","berserk","worthless","tidy","gruesome","dark","elegant","icy","far","certain","long-term","educated","eight","rich","serious","thankful","husky","loutish","ill-informed","broad","slippery","different","well-groomed","materialistic","rabid","fixed","overjoyed","mean","earsplitting","gaping","wide-eyed","concerned","unsightly","quaint","polite","previous","black","regular","adaptable","ultra","good","repulsive","teeny","thirsty","distinct","unhealthy","absurd","ripe","yellow","questionable","well-off","efficacious","adventurous","flat","solid","military","rigid","rough","separate","protective","finicky","scrawny","glistening","acid","nine","uncovered","small","nimble","maddening","like","juvenile","wry","red","juicy","rainy","closed","material","horrible","cute","doubtful","mixed","electric","sharp","light","dysfunctional","high","slow","funny","callous","nervous","proud","perfect","incompetent","bawdy","envious","somber","absent","little","abusive","hesitant","lethal","undesirable","friendly","daffy","fortunate","ruthless","smelly","vast","miscreant","healthy","unkempt","handsome","handsomely","frantic","warlike","clammy","shrill","ludicrous","abortive","pink","strong","scared","divergent","witty","yummy","longing","damp","aromatic","second","tall","chivalrous","periodic","dependent","uneven","ajar","overconfident","acoustic","simplistic","acceptable","peaceful","naughty","petite","plain","craven","unwieldy","incandescent","frightened","phobic","useless","tedious","absorbed","abject","brawny","black-and-white","able","abrupt","kindhearted","minor","sassy","screeching","talented","ethereal","lumpy","coherent","obese","uttermost","unused","languid","slim","elderly","ancient","nutty","impolite","brown","permissible","fascinated","oval","bustling","delightful","pleasant","flimsy","steep","icky","imminent","clean","curly","brief","adjoining","abashed","parched","powerful","torpid","overrated","apathetic","statuesque","amused","muddled","many","dreary","painful","eatable","inexpensive","yielding","recondite","familiar","obtainable","available","temporary","majestic","supreme","bored","bent","industrious","wet","outgoing","salty","jazzy","lackadaisical","knotty","bloody","psychedelic","odd","new","shaggy","fluffy","crooked","bite-sized","abandoned","cruel","momentous","shiny","left","rebel","nice","standing","ablaze","internal","ill-fated","testy","glamorous","probable","scary","boorish","malicious","robust","fanatical","heavy","wooden","sordid","learned","jumpy","unbecoming","ashamed","wholesale","right","adhesive","natural","ubiquitous","long","splendid","faulty","curvy","astonishing","knowing","full","detailed","keen","childlike","incredible","adamant","guttural","late","frightening","selective","marked","beneficial","futuristic","ritzy","scandalous","sturdy","kaput","erect","complex","addicted","one","assorted","irate","old-fashioned","upbeat","lively","super","jittery","two","grumpy","swanky","glib","dry","jumbled","boundless","dear","spotless","equable","hysterical","purple","foolish","belligerent","eager","hard","deafening","ten","possessive","sweet","waiting","terrible","special","tested","general","loud","possible","hellish","cut","free","","fair","fresh","rustic","meek","premium","silent","demonic","tranquil","watery","thoughtless","colossal","tremendous","productive","equal","perpetual","plucky","puny","precious","obsequious","needy","axiomatic","pathetic","teeny-tiny","false","legal","unnatural","satisfying","happy","reflective","aback","gray","untidy","unequal","quirky","next","beautiful","fat","extra-small","dirty","young","lopsided","six","womanly","observant","pumped","picayune","exotic","aggressive","synonymous","encouraging","far-flung","unadvised","future","dusty","plant","puzzling","hypnotic","unbiased","stale","unaccountable","wise","tangible","disgusted","economic","fast","thick","old","habitual","roasted","towering","tacit","breakable","ugly","wicked","level","tacky","wrong","nonchalant","cumbersome","nebulous","glorious","aspiring","scientific","chubby","accidental","therapeutic","defiant","awful","gentle","tightfisted","grouchy","festive","well-made","wandering","sophisticated","gratis","brainy","gusty","frail","willing","useful","delirious","deadpan","empty","erratic","labored","vague","helpful","broken","royal","wrathful","dynamic","alcoholic","absorbing","hissing","roomy","impossible","placid","coordinated","amuck","weary","drunk","tame","abiding","annoying","adorable","true","versed","venomous","cheerful","ordinary","nippy","lying","moaning","wasteful","gigantic","even","tense","colorful","grateful","bad","moldy","tiny","responsible","nasty","lewd","private","smiling","uninterested","sudden","curved","guarded","dangerous","giddy","smoggy","murky","warm","hurt","orange","innate","weak","onerous","macabre","tricky","tawdry","evasive","stupendous","normal","ceaseless","high-pitched","ambitious","thundering","discreet","fuzzy","gabby","combative","jagged","spotted","tangy","physical","entertaining","melted","imported","hollow","brash","ambiguous","neat","silent","drab","zealous","zippy","wary","four","clumsy","seemly","silly","complete","shallow","safe","cool","opposite","efficient","creepy","aware","ill","male","mundane","exuberant","bumpy","spectacular","fierce","highfalutin","endurable","tough","remarkable","unique","guiltless","infamous","quizzical","blue-eyed","mighty","judicious","nondescript","decisive","piquant","amusing","flagrant","naive","rare","confused","nappy","understood","handy","delicious","dazzling","youthful","impartial","nauseating","modern","violent","relieved","slimy","dapper","magical","pricey","zany","abundant","steady","shocking","hushed","oceanic","grubby","likeable","enchanted","soggy","noxious","lean","cowardly","unequaled","acidic","political","pastoral","messy","early","gorgeous","paltry","tense","crazy","outrageous","bitter","trashy","fallacious","strange","illegal","sneaky","tearful","lavish","delicate","whole","capable","mellow","chilly","luxuriant","magenta","half","woebegone","substantial","unarmed","worried","domineering","better","shut","ad hoc","goofy","aloof","deranged","wonderful","bright","automatic","sable","eminent","fearful","hanging","capricious","skinny","garrulous","inquisitive","halting","famous","huge","wide","accessible","hard-to-find","utopian","mindless","merciful","mountainous","hospitable","hulking","fertile","depressed","groovy","billowy","known","mysterious","spiteful","tasteless","grandiose","loving","idiotic","grieving","clear","utter","alleged","freezing","secretive","toothsome","taboo","conscious","verdant","ratty","agreeable","changeable","sulky","silky","cluttered","chunky","exclusive","disgusting","vivacious","dispensable","helpless","large","cooing","volatile","direful","simple","heady","purring","hapless","arrogant","sloppy","literate","wiggly","psychotic","tasteful","animated","thirsty","abnormal","careful","symptomatic","deep","illustrious","whimsical","heavenly","acrid","striped","three","redundant","macho","energetic","attractive","selfish","faded","average","waggish","dramatic","historical","gaudy","graceful","obscene","victorious","whispering","descriptive","spiritual","difficult","filthy","spiky","functional","sweltering","hilarious","daily","lyrical","upset","white","foamy","ready","threatening","tasty","rightful","last","reminiscent","rude","brave","angry","harmonious","furry","obsolete","wiry","kind","sad","hot","lucky","crabby","tart","debonair","outstanding","sincere","enormous","courageous","vulgar W","same","cautious","truculent","jolly","raspy","lovely","savory","gullible","obnoxious","second-hand","heartbreaking","puzzled","glossy","magnificent","defective","terrific","painstaking","parallel","chief","windy","nutritious","married","fumbling","zonked","clever","real","lacking","stiff","faithful","agonizing","nifty","vagabond","dashing","kindly","limping","zesty","quiet","voracious","shy","receptive","ugliest","pointless","straight","makeshift","quack","gamy","lively","racial","superb","spurious","homeless","flashy","holistic","sparkling","optimal","hungry","important","irritating","rural","sour","plausible","busy","numberless","plastic","noisy","madly","greedy","sore","third","calm","devilish","rampant","smooth","cultured","actually","spotty","wakeful","caring","fearless","mere","sore","stimulating","lowly","staking","spooky","crowded","loose","jaded","overwrought","uptight","used","unable","gifted","bashful","tiresome","wealthy","cold","enchanting","omniscient","thinkable","common","ahead","quixotic","tired","rapid","scintillating","marvelous","offbeat","condemned","flowery","afraid","subdued","aboriginal","wild","fragile","wistful","hallowed","righteous","elite","petite","tenuous","cloudy","motionless","noiseless","snotty","alert","aboard","lazy","bright","nonstop","quarrelsome","cynical","decorous","squealing","few","blushing","thoughtful","draconian","nostalgic","cute","flippant","milky","mammoth","lush","tan","knowledgeable","calculating","open","voiceless","burly","bizarre","numerous","disillusioned","massive","null","fluttering","stereotyped","unwritten","quick","sticky","homely","short","sick","bouncy","didactic","barbarous","harsh","interesting","square","alive","melodic","rambunctious","nosy","annoyed","honorable","elfin","workable","aberrant","medical","scattered","spicy","jealous","abhorrent","squeamish","organic","first","mature","abaft","spiffy","superficial","anxious","foregoing","necessary","resonant","overt","public","cuddly","godly","successful","careless","grey","vengeful","feeble","gleaming","abrasive","hurried","penitent","disagreeable","cagey","best","shivering","unusual","sleepy","various","fantastic","past","immense","panoramic","tight","living","exultant","expensive","parsimonious","swift","mushy","fabulous","snobbish","amazing","valuable","giant","skillful","abstracted","lonely","subsequent","pretty","sedate","flawless","near","hideous","chemical","embarrassed","classy","poor","comfortable","deserted","ossified","resolute","typical","great","panicky","succinct","hateful","pushy","green","aquatic","maniacal","feigned","itchy","dusty","violet","stormy","unsuitable","forgetful","rotten","meaty","boring","greasy","dead","fretful","excited","insidious","breezy","unruly","alike","humorous","faint","enthusiastic","big","awake","well-to-do","vigorous","laughable","gainful","cooperative","awesome","obeisant","fine","furtive","pale","female"];
    this.adverb=["grossly","incoherently","well","inevitably","bluntly","supposedly","richly","entirely","furthermore","princely","deleteriously","forcefully","seemingly","rancorously","yesterday","ultimately","presumably","variably","superbly","decently","obliquely","peacefully","sadistically","savagely","deceptively","snobbishly","debatably","quickly","impersonally","frightfully","flexibly","later","unreservedly","magnetically","deferentially","unwisely","blatantly","irrationally","insistently","spectacularly","slightly","dependently","ponderously","steadfastly","jocularly","inconsistently","stirringly","gaily","unsuccessfully","fiercely","exceptionally","spitefully","robustly","obsequiously","clearly","provisionally","sweetly","kingly","devotedly","politically","hungrily","stunningly","suddenly","yearly","hectically","testily","temperamentally","expressly","unexpectedly","leisurely","curvaceously","insatiably","miserably","jubilantly","consentingly","reliantly","categorically","evidently","kindly","faintly","ideally","dangerously","dramatically","ungraciously","brusquely","menacingly","gloriously","impulsively","perfectly","strictly","staunchly","queenly","wretchedly","enjoyably","squalidly","fanatically","bravely","quirkily","deeply","minutely","fitfully","chiefly","initially","dauntlessly","prodigiously","painstakingly","awry","courteously","memorably","excitedly","romantically","justifiably","esoterically","inscrutably","commendably","positively","brilliantly","neglectfully","gaudily","lazily","meritoriously","pivotally","soberly","ferociously","possibly","competently","satanically","indubitably","oddly","immensely","purely","ignorantly","previously","fatally","brutally","customarily","fantastically","profoundly","sleepily","exorbitantly","between","sublimely","carnally","courageously","melodramatically","scarcely","handsomely","trivially","extraordinarily","specially","obsessively","limply","timidly","sloppily","hopefully","spontaneously","pompously","infectiously","discriminately","systematically","nonchalantly","diligently","senselessly","harmfully","idiotically","disastrously","boorishly","inordinately","unlikely","unerringly","decidedly","licentiously","sensationally","helpfully","wickedly","fiendishly","saucily","directly","nicely","lively","safely","exquisitely","vacantly","blandly","autocratically","considerably","solidly","eminently","expectantly","shabbily","stimulatingly","unintentionally","drunkenly","only","spotlessly","whimsically","tamely","unmannerly","disorderly","loosely","faultlessly","correspondingly","hellishly","deliberately","zealously","jointly","playfully","influentially","quixotically","perpetually","indisputably","inanely","enterprisingly","impudently","jealously","sexually","sizably","slyly","uniquely","timely","vulnerably","sturdily","even","ceremonially","mildly","intrinsically","nimbly","pardonably","preposterously","persuasively","cliquishly","mistakenly","disgracefully","sinisterly","densely","modestly","dissolutely","merrily","unduly","impertinently","profitably","watchfully","ravenously","originally","tolerantly","inherently","lackadaisically","imperfectly","roughly","flamboyantly","despondently","severely","indiscriminately","laboriously","suitably","insultingly","truthfully","unnaturally","explicitly","strenuously","delightfully","pleasingly","unscrupulously","irritably","restlessly","impatiently","tenderly","pointlessly","incidentally","manifestly","coherently","glamorously","briskly","nervously","separately","pictorially","tentatively","authoritatively","joyously","certainly","glumly","tenaciously","unreliably","joyfully","churlishly","fastidiously","successfully","neatly","undeniably","worthily","financially","luxuriantly","fondly","dreadfully","nearby","infrequently","warily","preliminarily","overly","lawlessly","callously","lamely","unflinchingly","conventionally","harmoniously","dismally","independently","frailly","bountifully","partially","coarsely","strikingly","dryly","magnanimously","subtly","mostly","horribly","truly","enviably","unshakably","liberally","restfully","consciously","lucidly","variously","skillfully","goodly","virtuously","stupidly","morbidly","caustically","far","temporally","potently","intermittently","ordinarily","uncaringly","regretfully","extensively","privately","unendingly","closely","rashly","obviously","prickly","contentiously","thirstily","rudely","easily","selectively","notably","mercifully","rarely","tensely","importantly","intensely","thoughtfully","decreasingly","unrealistically","undoubtedly","avidly","doubtfully","repeatedly","heedlessly","less","definitely","voluntarily","recklessly","speedily","timelessly","methodically","tremendously","conceptually","lasciviously","capriciously","rearward","sacredly","unwittingly","lovingly","preciously","excessively","interminably","away","onerously","gladly","succinctly","intricately","hilariously","promptly","scathingly","distressingly","suavely","crossly","swiftly","productively","cheerfully","ostentatiously","outwardly","understandably","moodily","credulously","shrewdly","proportionally","brazenly","ridiculously","expediently","obtrusively","mockingly","unrestrainedly","brashly","hideously","handily","impartially","snidely","unremittingly","monumentally","virtually","unbearably","worshipfully","reluctantly","fashionably","negatively","sooner","laudably","evasively","jauntily","electrifyingly","socially","dynamically","totally","foully","meticulously","mutinously","cravenly","sensually","woodenly","unwaveringly","uniformly","sentimentally","plausibly","infinitely","verbosely","ritualistically","buoyantly","knowingly","freshly","resoundingly","dubiously","painfully","uncivilly","charmingly","enviously","mundanely","sympathetically","ostensibly","defiantly","excruciatingly","urbanely","evermore","obscenely","putridly","stiffly","derisively","reverentially","exuberantly","vacuously","distinctly","unruly","tyrannically","guardedly","vicariously","thoroughly","cogently","indecently","seldom","shrilly","heinously","precariously","selfishly","lustfully","powerfully","inadvertently","purposely","treacherously","serenely","delicately","negligibly","deceitfully","voraciously","brightly","informally","presently","responsively","meekly","statically","tangibly","grimly","theatrically","widely","behind","practically","extrovertly","dearly","frugally","changeably","lightly","crudely","disproportionally","climatically","once","surly","uselessly","stately","falsely","wisely","euphorically","frantically","voluminously","rigorously","prominently","constantly","destructively","resentfully","backwards","invariably","spinelessly","freely","gruelingly","bitterly","strangely","immoderately","leniently","unsophisticatedly","poignantly","voluptuously","impolitely","gentlemanly","ingeniously","immaculately","profusely","deftly","carelessly","comically","hesitantly","tiredly","utterly","torpidly","desolately","forgetfully","broadly","specifically","consequently","erratically","tactfully","exceedingly","unequivocally","mournfully","rebelliously","left","traumatically","warmly","daintily","stylishly","greedily","lethargically","probably","never","unfriendly","frivolously","heavily","eventually","numerically","very","ungentlemanly","ominously","hardly","confidently","precisely","violently","naively","hugely","tediously","smartly","contemporaneously","vividly","potentially","stubbornly","candidly","fancifully","idiomatically","venomously","injudiciously","eagerly","shyly","perennially","legitimately","newly","eternally","hotly","spryly","fervently","proficiently","sternly","smoothly","disparagingly","horrendously","principally","irresponsibly","early","unselfishly","hollowly","suggestively","singly","concisely","longingly","clumsily","provocatively","immodestly","ungainly","increasingly","unassailably","unreasonably","correctly","poorly","benevolently","plainly","daily","overconfidently","murderously","supremely","backward","sullenly","seductively","upright","forward","furiously","earlier","uneasily","coolly","providentially","sharply","questionably","impetuously","somberly","unquestionably","cunningly","grotesquely","tumultuously","effeminately","civilly","glaringly","momentarily","shockingly","outlandishly","disdainfully","awfully","tightly","grievously","perilously","awkwardly","badly","insanely","flagrantly","routinely","barely","speculatively","erroneously","fully","straight","insolently","cryptically","permissively","gently","formally","glibly","haggardly","unhesitatingly","sadly","recently","fortunately","innocently","heavenly","imperiously","forever","propitiously","lavishly","uncontrollably","unfortunately","gruffly","tirelessly","illustriously","rapaciously","intelligibly","nearly","morosely","heroically","latently","inquisitively","effectively","tempestuously","rowdily","logically","gracefully","pointedly","riotously","buxomly","woefully","vaguely","regularly","flowerily","not","dictatorially","now","often","frenetically","fortuitously","developmentally","jokingly","unusually","irascibly","intrepidly","ludicrously","uneventfully","resolutely","confidentially","shortly","unevenly","shakily","gigantically","radically","fluently","discreetly","unfashionably","visibly","finely","conceitedly","enticingly","crucially","wily","thunderously","inaccurately","publicly","neighborly","frigidly","irrefutably","monstrously","mannerly","substantially","beneficially","scandalously","invigoratingly","unemotionally","insufferably","palatably","pessimistically","enthusiastically","marvelously","unequally","ghastly","diplomatically","fatefully","vastly","parsimoniously","singularly","viciously","dimly","ignominiously","nakedly","intelligently","ironically","rightfully","cordially","faithfully","blindly","unintelligently","centrally","more","normally","punctually","ruthlessly","fast","obligingly","sassily","extremely","copiously","deadly","placidly","hypnotically","favorably","wildly","foolishly","especially","politely","lately","ineffectually","valiantly","unfairly","properly","spaciously","vitally","erotically","monthly","habitually","wrongly","excellently","ravenously","sparingly","drastically","gratuitously","uncommonly","verifiably","beforehand","soon","steadily","hourly","locally","smugly","furtively","continually","capably","keenly","obnoxiously","objectively","immorally","willingly","tranquilly","fleetingly","cruelly","lewdly","extravagantly","unconsciously","before","grandly","indefinitely","conspicuously","victoriously","inadequately","sheepishly","fraudulently","tersely","indulgently","gleefully","insincerely","authentically","malevolently","childishly","soothingly","passionately","plentifully","generously","feebly","conscientiously","officially","vulgarly","crookedly","randomly","bleakly","briefly","sporadically","listlessly","reverently","indistinctly","symmetrically","forlornly","wobbly","covertly","sprightly","urgently","spiritually","slowly","reasonably","unpleasantly","superficially","immovably","incorrectly","resiliently","expertly","costly","thoughtlessly","obediently","naturally","endlessly","unstintingly","relentlessly","calmly","conclusively","passively","highly","curtly","mindfully","opulently","justly","industriously","tolerably","mysteriously","shamelessly","noisily","vainly","elsewhere","surreptitiously","drolly","haphazardly","blithely","secularly","diabolically","unceasingly","humorously","malignantly","incessantly","dogmatically","then","quietly","discourteously","sarcastically","corruptly","unambiguously","splendidly","considerately","unfathomably","tastefully","culturally","spasmodically","simply","loudly","congenially","weakly","out","petulantly","irregularly","righteously","solemnly","forth","egotistically","oppressively","incredibly","masterly","skeptically","energetically","shamefully","on","terribly","sedately","paradoxically","lowly","sorrowfully","basically","vivaciously","graciously","superlatively","rapidly","pensively","maliciously","scholarly","tearfully","slovenly","harshly","humanely","vilely","respectively","drably","neurotically","exactly","silently","obscurely","really","equally","usually","essentially","eloquently","beside","terrifically","infamously","summarily","patently","outward","unconditionally","busily","crisply","peculiarly","hysterically","surprisingly","prematurely","pleasantly","innately","monotonously","boastfully","mortally","emphatically","evenly","materially","gallantly","tragically","intentionally","orderly","supernaturally","mainly","beguilingly","pornographically","fairly","remotely","collectively","frankly","scornfully","hygienically","optimistically","madly","stealthily","particularly","divinely","too","unseemly","judiciously","dazzlingly","pertly","steeply","heartlessly","unspeakably","boldly","studiously","factually","completely","profanely","cautiously","thickly","ornamentally","exhilaratingly","flatly","famously","openly","typically","uncertainly","weekly","primarily","fearfully","loquaciously","unforgivably","hastily","thrillingly","timorously","prudently","somewhat","cheaply","ornately","seemly","strongly","staunchly","laconically","monetarily","unclearly","ecstatically","elegantly","deviously","compassionately","sourly","popularly","honestly","phenomenally","graphically","frequently","vehemently","flippantly","racially","worldly","rationally","traditionally","wholly","wantonly","presumptuously","conveniently","suspiciously","consensually","casually","enormously","seriously","fundamentally","gravely","tomorrow","fraternally","hedonistically","sometimes","critically","impeccably","massively","rigidly","wholesomely","grudgingly","cleverly","right","cataclysmically","wearily","securely","opaquely","softly","pathetically","professionally","firmly","lustily","elaborately","onward","carefully","queerly","happily","sickly","tortuously","thinly","bashfully","vociferously","cowardly","dully","vigorously","further","ineptly","emotionally","eerily","psychedelically","luckily"];	

    // Returns a random integer between min (included) and max (excluded)
    // Using Math.round() will give you a non-uniform distribution!
    var rndm_std=new RandApp({"seed":seed,"distribution":"normal","persistentSeed":true});
    var rndm_unisqr=new RandApp({"seed":seed,"distribution":"uni-squared","persistentSeed":true});
    var rndm_chi=new RandApp({"seed":seed,"distribution":"chi-squared","persistentSeed":true});
    var rndm_uni=new RandApp({"seed":seed,"distribution":"uniform","persistentSeed":true});
    /*
    function getRandomInt(min, max, distribution) {
        return rndm.randIntFromIntervall(min,max);
    }
*/
    function edify(word){
    	var subs=word.slice(-1);
    	if(subs!="e"){
    			return "ed";
    	}else{
    			return "d";
    	}
    }
    
    this.generateRandomNoun=function(){
        return randomword(this.noun,distributionnouns);
    }
    this.generateRandomVerb=function(){
        return randomword(this.verb,distributionverbs);
    }
    this.generateRandomAdverb=function(){
        return randomword(this.adverb,distributionadverbs);
    }
    this.generateRandomAdjective=function(){
        return randomword(this.adjective,distributionadjectives);
    }
    this.generateRandomDeterminer=function(){
        return randomword(this.determiner,distributiondeterminers);
    }
    this.generateRandomConjunction=function(){
        return randomword(this.conjunction,distributionconjunctions);
    }
    this.generateRandomModal=function(){
        return randomword(this.modal,distributionmodals);
    }
    function randomword(list,distribution){
        if(distribution=="normal"){
            return list[rndm_std.randIntFromIntervall(0,list.length)];          
        }else if(distribution=="uniform"){
            return list[rndm_uni.randIntFromIntervall(0,list.length)];        
        }else if(distribution=="chi-squared"){
            return list[rndm_chi.randIntFromIntervall(0,list.length)];        
        }else if(distribution=="uni-squared"){
            return list[rndm_unisqr.randIntFromIntervall(0,list.length)];        
        }else{
            alert("Unknown distribution function: "+distribution);
        }
    }

    /*
     * function replacen(search, replace, subject, n)
     *
     * Replaces term "search" with "replace" at the first occurrence after position "n" in string "subject"
     */
    function replacen(search,replace,subject,n){
    	var foundpos=0;	
    	var beforestr="";
    	var afterstr="";
    	
    	// TODO: make sure we start from n
    	
    	foundpos=subject.indexOf(search);
    	
    	if (foundpos != -1){
    		beforestr = subject.substr(0, foundpos);
    		afterstr = subject.substr(foundpos+search.length);
    		subject = beforestr + replace + afterstr;
    	}
    	
    	return subject;
    	
    }

    function countfinds(search,subject){

    	var n = 0;
    	var count = 0;
    	var index = 0;
    	while (n >= 0){
    		n = subject.indexOf(search, index);
    		if (n != -1) count++;
    		index = n + search.length;
    	}
    	return count;

    }	

    /*
     * function replacerandom(placeholder, set, distribution, sentence)
     *
     * replace term "placeholder" with a random word from "set" using the distribution "distribution" in string "sentence
     *
     */
    function replacerandom(placeholder,set,distribution,sentence){
    	var found=countfinds(placeholder,sentence);			
    	for(var i=0;i<found;i++){
    		sentence=replacen(placeholder,randomword(set,distribution),sentence,0);					
    	}
    	return sentence;
    }



    this.generateSentence=function() {
    	
    //		var noun,verb,determiner,adjective,adverb,conjunction,modal;

    	var sentence="[subject] [verbphrase] [object]";
    		
    	sentence=sentence.replace("[subject]","[nounphrase]");
    	sentence=sentence.replace("[object]","[nounphrase]");
    	
    	// Replace all nounphrases with "delimiter noun" or "delimiter adjective noun"
    	// Also add determiners and plural s
    				
    	var nonounphrases=countfinds("[nounphrase]",sentence);	
    	for(var i=0;i<nonounphrases;i++){
    		if(rndm_uni.rand()>=probnounphrase){

    				var replacestring=randomword(this.determiner,distributiondeterminers);

    				if(replacestring=="another"||replacestring=="a"||replacestring=="the"||replacestring=="one"||replacestring=="this"||replacestring=="that"||replacestring=="which"||replacestring=="either"||replacestring=="neither"||replacestring=="each"||replacestring=="every"||replacestring=="any"||replacestring=="whichever"||replacestring=="the same"||replacestring=="which"||replacestring=="whatever"||replacestring=="no"||replacestring=="my"||replacestring=="your"||replacestring=="our"||replacestring=="his"||replacestring=="her"||replacestring=="each"||replacestring=="the only"||replacestring=="the"||replacestring=="this"||replacestring=="that"){
    						replacestring=" " + replacestring + " [noun]";	
    				}else{
    						replacestring=" " + replacestring +" [noun]s";				
    				}
    				sentence=replacen("[nounphrase]",replacestring,sentence,0);
    									
    		}else{
    				replacestring=randomword(this.determiner,distributiondeterminers);

    				if(replacestring=="another"||replacestring=="a"||replacestring=="the"||replacestring=="one"||replacestring=="this"||replacestring=="that"||replacestring=="which"||replacestring=="either"||replacestring=="neither"||replacestring=="each"||replacestring=="every"||replacestring=="any"||replacestring=="whichever"||replacestring=="the same"||replacestring=="which"||replacestring=="whatever"||replacestring=="no"||replacestring=="my"||replacestring=="your"||replacestring=="our"||replacestring=="his"||replacestring=="her"||replacestring=="each"||replacestring=="the only"||replacestring=="the"||replacestring=="this"||replacestring=="that"){
    						replacestring=" " + replacestring + " [adjective] [noun]";	
    				}else{
    						replacestring=" " + replacestring + " [adjective] [noun]s";				
    				}
    				sentence=replacen("[nounphrase]", replacestring, sentence,0);
    		}			
    	}
    	


    	// Replace all noun determiners with a random determiner			
    	found=countfinds("[determiner] [noun]",sentence);
    				
    	for(i=0;i<found;i++){
    		
    		//console.log("FOO"+ sentence +found);
    		var replacestring=randomword(this.determiner,distributiondeterminers);

    		if(replacestring=="another"||replacestring=="a"||replacestring=="the"||replacestring=="one"||replacestring=="much"||replacestring=="this"||replacestring=="that"||replacestring=="which"||replacestring=="either"||replacestring=="neither"||replacestring=="each"||replacestring=="every"||replacestring=="any"||replacestring=="whichever"||replacestring=="the same"||replacestring=="which"||replacestring=="whatever"||replacestring=="no"||replacestring=="my"||replacestring=="your"||replacestring=="our"||replacestring=="his"||replacestring=="her"||replacestring=="each"||replacestring=="the only"||replacestring=="the"||replacestring=="this"||replacestring=="that"){
    			replacestring=" "+replacestring+" [noun]";	
    		} else {
    			replacestring=" "+replacestring+" [noun]s";				
    		}
    		
    		sentence=replacen("[determiner] [noun]",replacestring,sentence,0);				
    	}

    	// Replace all verbphrases with "verb" or "adverb verb"			
    	nonounphrases=countfinds("[verbphrase]",sentence);			
    	for(i=0;i<nonounphrases;i++){
    		if(rndm_uni.rand()>=probverbphrase){
    				sentence=replacen("[verbphrase]","[verb]",sentence,0);					
    		}else{
    				sentence=replacen("[verbphrase]","[adverb] [verb]",sentence,0);							
    		}			
    	}
    	
    	// Replace some adjectives with two adjectives
    	var adjectives=countfinds("[adjective]",sentence);			
    	for(var i=0;i<this.adjectives;i++){
    		if(rndm_uni.rand()>=probdualajdectives){
    			sentence=replacen("[adjective]","[dual adjective]",sentence,0);					
    		}			
    	}
    	
    	// Replace all dual adjectives with two adjectives
    	// One alternative to this is to insert an "and" between the two adjectives
    	var dualadjectives=countfinds("[dual adjective]",sentence);			
    	for(var i=0;i<dualadjectives;i++){
    		sentence=replacen("[dual adjective]","[adjective] [conjunction] [adjective]",sentence,0);					
    	}
    	
    	// Replace all conjunctions with a random conjunction			
    	var conjunctions=countfinds("[adjective] [conjunction] [adjective]",sentence);		
    	//console.log("Before conjunction loop: ["+found+"] " + sentence);
    	for(var i=0;i<conjunctions;i++){
    		console.log("Before conjunction: "+sentence);			
    		replacestring=randomword(this.conjunction,distributionconjunctions);
    		if(replacestring=="or"){
    			replacestring="either [adjective] or [adjective]";
    		} else if (replacestring=="nor"){
    			replacestring="neither [adjective] nor [adjective]";					
    		} else if (replacestring=="both"){									
    			replacestring="both [adjective] and [adjective]";
    		} else if (replacestring=="equally"){									
    			replacestring="equally [adjective] and [adjective]";
    		} else {
    			replacestring="[adjective] "+ replacestring+ " [adjective]";
    		}
    		sentence=replacen("[adjective] [conjunction] [adjective]",replacestring,sentence,0);							
    	}

    	// Replace all nouns with a random noun
    	sentence=replacerandom("[noun]",this.noun,distributionnouns,sentence);			

    	// Replace all verbs with a random verb
    	// Verbs have modals
    	
    	var found=countfinds("[verb]",sentence);			
    	for(var i=0;i<found;i++){
    		replacestring=randomword(this.verb,distributionverbs);
    		amodal=randomword(this.modal,distributionmodals);
    		
    		if(amodal=="s"){
    			replacestring+="s";
    		} else if (amodal=="ed"){
    			replacestring+=edify(replacestring);	
    		} else if (amodal=="had"){
    			replacestring=amodal+" "+replacestring+edify(replacestring);					
    		} else {
    			// All others such as can shall will did etc
    			replacestring=amodal+" "+replacestring;				
    		}
    		
    		sentence=replacen("[verb]",replacestring,sentence,0);				
    	}

    	// Replace all adverbs with a random adverb			
    	sentence=replacerandom("[adverb]",this.adverb,distributionadverbs,sentence);			

    	// Replace all adjectives with a random adjective			
    	sentence=replacerandom("[adjective]",this.adjective,distributionadjectives,sentence);	
    	
    	// Remove starting space and add period and make first letter capital.		
    	sentence = sentence.substr(1);
    	// remove double spaces
    	sentence = sentence.replace(/  /g, " ");

    	return sentence.charAt(0).toUpperCase() + sentence.slice(1) + ". ";    				
    }
    this.clearSeeds=function(){
        rndm_std.clearSeed();
        rndm_unisqr.clearSeed();
        rndm_chi.clearSeed();
        rndm_uni.clearSeed();
    }
}
