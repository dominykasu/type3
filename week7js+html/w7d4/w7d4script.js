// const jokes = [
//     {
//         "category": "anekdotai-apie-blondines",
//         "joke": "Prie lifto stovi brunetė ir blondine. Brunetė sako:\n-Kviesk lifta. \n-Lifte, lifte! -šaukia blondinė. \n-Naudok mygtuka,kvaile.\n-Mygtuk,mygtuk!"
//     },
//     {
//         "category": "anekdotai-apie-blondines",
//         "joke": "Važiuoja blondinė ekskalatoriumi, staiga, šis sugedo. \nRašo post'a į facebook'a - jau dešimt minučiu, stoviu ir laukiu kada ekskalatoriu sutvarkys! :D"
//     },
//     {
//         "category": "anekdotai-apie-blondines",
//         "joke": "Į daktarą kreipėsi blondinė, nukritusi nuo laiptų. Sako:\n- Lipau laiptais ir nukritau. Susimušiau. Skauda.\n- Imkite šio tepalo ir sutepkite vietas, kur kritote, - sako daktaras.\nPraeina diena ir pas daktarą ateina visas būrys žmonių su sumušimais:\n- Daktare, kažkokia kvaiša ištepė laiptus tepalu...\t"
//     },
//     {
//         "category": "anekdotai-apie-blondines",
//         "joke": "Blondinė mokosi vairuoti.Tik įlipa į automobilį, instruktorius sako:\n-Jūs neišlaikėte.\nBlondinė:\n- Bet aš tik ką tik įlipau.\nInstruktorius:\n- Jūs atsisėdote ant galinės sedynės"
//     },
//     {
//         "category": "anekdotai-apie-blondines",
//         "joke": "Dve blondinės sėdi medyja ir pjauna šaką, ant kurios sėdi. Eina pro šalį brunetė ir sako:\n-Jūs išprotėjote? Nukrisite ir susilaužysite kojas!\nBlondinės nusijuokia ir toliau pjauna šaka. Tada nukrinta ir susilaužo kojas. Abi patenka į ligoninę.\nKitą dieną atsidaro palatos durys ir pasirodo toji brunetė, nes ji čia dirba sesele. Ir tada viena blondinė piktai sako:\n-Žiūrėk, ateina ta pranašautoja!"
//     },
//     {
//         "category": "anekdotai-apie-blondines",
//         "joke": "Ką gausime sukryžminę haskį ir blondinę.? Arba labai kvailą šunį, arba šalčiui atsparią kalę."
//     },
//     {
//         "category": "anekdotai-apie-blondines",
//         "joke": "Žmona sako vyrui:\n- Nueik į parduotuvę.\n Vyras ruošiasi eiti, žmona vėl sako:\n-Nu jau eini į lauką tai ir šiukšles išnešk, dar ir šunį pavedžiok.\nVyras neiškentęs sako:\n- Tai dar šluotą į subinę įkišk, eidamas laiptus nuošluosiu..."
//     },
//     {
//         "category": "anekdotai-apie-blondines",
//         "joke": "Kaip galima užimti ilgam laikui blondinę:\npaimti popieriaus lapą ir ant abiejų pusių užrašyti žiūrėti kitoje pusėje."
//     },
//     {
//         "category": "anekdotai-apie-blondines",
//         "joke": "Blondinė gražiu nauju “mersu” važiuoja per raudoną šviesą ir žinoma, į jos mašiną įsirėžia “zapukas”. Blondinė išlipa iš savo mašinos ir, išsproginusi akis, taškydamasi seilėmis bei kitaip rodydama įniršį, eina prie “zapuko”. O iš “zapuko” išlipa senyvas dėdulė, kuris, blondinei dar nieko nespėjus pasakyti, liūdnai klausia:\n- Panele, o jūs bent vairavimo egzamine esate buvusi?\n- Taip, – užrėkia blondinė, – ir skirtingai nuo tavęs, daugybę kartų, ožy!!!"
//     },
//     {
//         "category": "anekdotai-apie-blondines",
//         "joke": "Į daktarą kreipėsi blondinė, nukritusi nuo laiptų. Sako:\n- Lipau laiptais ir nukritau. Susimušiau. Skauda.\n- Imkite šio tepalo ir sutepkite vietas, kur kritote, – sako daktaras.\nPraeina diena ir pas daktarą ateina visas būrys žmonių su sumušimais:\n- Daktare, kažkokia kvaiša ištepė laiptus tepalu…"
//     },
//     {
//         "category": "anekdotai-apie-blondines",
//         "joke": "Važioja mašina blondinė, staiga ją sustapdo policija. Pareigūnas priėjęs prie blondinės sako:\n- Laba diena, prašom parodyti teises,- blondine duoda technikini.\n- Teises man teises duokit,- blondine:\n- Atsiprašau paregūnas man pirma diena kaip teises išsilaikiau, dar nieko nežinau.\nNu pareigunas nueina prie mašinos pasiema racija pasako situacija ir klausia ką daryt, iš racijos kitas pareigunas sako:\n- Blondinė su raudonu mersu?\n- Jo, ką daryt?\n- Nusimauk kelnes ir eik prie mašinos.\n- Ką tu gal durnas kaip čia aš..\n- Sakau maukis kelnes ir eik pamatysi viskas gerai.\nNu pareigunas taip ir padare nusimovė kelnes ir eina link blondines, ta per veidrodėli pamačius kad ateina pareigūnas sako:\n- Nu nach*i ir vėl su alkotesteliu ateina."
//     }
// ]
// const box = document.querySelector(".box")
//
//
//     // console.log(jokes.length)
//     for (let i = 0; i < jokes.length; i++) {
// box.innerHTML+=`
// <div class="card">
// <h1>${jokes[i].category}</h1>
// <h2>${jokes[i].joke}</h2>
// </div>`
//  box.innerHTML += `<button id="${i}">Log Joke</button>`
//
// }
//
//
// // function getJokes2(){
// //     for (let i = 0; i < jokes.length; i++) {
// //
// //         const card = document.createElement("div")
// // card.classList.add('card')
// //         const h1 = document.createElement("h1")
// //         h1.innerText = jokes[i].category
// //
// //         const h2 = document.createElement("h2")
// //       h2.innerText = jokes[i].joke
// //
// //         card.appendChild(h1)
// //         card.appendChild(h2)
// //
// //         box.appendChild(card)
// //     }
// // }
// // getJokes2()
//
// // jokes.map(x => {
// //     box.innerHTML += x.joke.toUpperCase()
// //     box.classList.add("bg")
// // })
//
// const button = document.querySelectorAll("button")
//
// // for (let i = 0; i < button.length; i++) {
// //     button[i].onclick = () => {
// //         console.log(jokes[i].joke)
// //     }
// // }
// button.forEach((btn, index) => {
//         btn.onclick = () => {
//             console.log(jokes[index].joke)
//         }
// })

//     for (let i = 0; i < jokes.length; i++) {
// box.innerHTML+=`
// <div class="card">
// <h1>${jokes[i].category}</h1>
// <h2>${jokes[i].joke}</h2>
// </div>`
//  box.innerHTML += `<button id="${i}">Log Joke</button>`
//
// }
// // jokes.map(x => {
// //     box.innerHTML += x.joke.toUpperCase()
// //     box.classList.add("bg")
// // })
const movies = [
    {
        "image": "http://37.221.162.250/uploads/posts/2021-10/1634029810_swan.jpg",
        "titleLtu": "Princesė Gulbė. Karališkoji miZterija",
        "titleEng": "The Swan Princess: A Royal Myztery",
        "genre": ["Animaciniai", "Šeimai"],
        "imdbRating": 4.2,
        "year": 2018,
        "duration": "79 min",
        "description": "Karalystės gyventojai susiduria su paslaptingu reiškiniu – visur atsirandančiu Z ženklu. Princesė ir jos draugai pajunta, kad kažkas jiems nori perduoti slaptą žinią... Kas tai galėtų būti?"
    }, {
        "image": "http://37.221.162.250/uploads/posts/2021-10/1633429858_gui.jpg",
        "titleLtu": "Gitara",
        "titleEng": "The Guitar",
        "genre": ["Dramos", "Romantiniai", "Muzikiniai"],
        "imdbRating": 6.5,
        "year": 2008,
        "duration": "Geras filmas  Iš tikrųjų nesitikėjau tokios pabaigos. Tai filmas, kurį pažiūrėjus, pagalvojau, kad gera gyventi  Kitaip sakant, prasmingas filmas",
        "description": "Ši istorija pasakoja apie moterį, kuri susirgo gerklų vėžiu ir iškart po to jai viskas pradėjo slysti iš rankų: ją paliko vaikinas, ji buvo išmesta iš darbo ir t.t. Daktarė jai pasakė, kad jai gyventi liko tik du mėnesiai, tad ji tuos du mėnesius nusprendė nugyventi taip, kaip visada troško."
    }, {
        "image": "http://37.221.162.250/uploads/posts/2021-09/1633020257_alive.jpg",
        "titleLtu": "Niekas neišeina gyvas",
        "titleEng": "No One Gets Out Alive",
        "genre": ["Dramos", "Siaubo", "Trileriai", "Mistiniai"],
        "imdbRating": 5.3,
        "year": 2021,
        "duration": "Filmo prasmės, nesupratau, kažkoks be konkrečios minties , nelabai patiko. Nelabai siūlau išleist 2taškų",
        "description": "Imigrantė, ieškanti amerikietiškos svajonės, priversta gyventi pensionate, kur patenka į košmarą, iš kurio negali pasprukti."
    }, {
        "image": "http://37.221.162.250/uploads/posts/2021-10/1634745846_shaggy.jpg",
        "titleLtu": "Šuns kailyje",
        "titleEng": "The Shaggy Dog",
        "genre": ["Komedijos", "Fantastiniai", "Šeimai"],
        "imdbRating": 4.4,
        "year": 2006,
        "duration": "98 min",
        "description": "A man tries to live a normal life despite the fact that he sometimes turns into a sheepdog."
    }, {
        "image": "http://37.221.162.250/uploads/posts/2021-10/1634745602_dune.jpg",
        "titleLtu": "Kopa",
        "titleEng": "Dune",
        "genre": ["Veiksmo", "Dramos", "Moksliniai", "Nuotykiai"],
        "imdbRating": null,
        "year": 2021,
        "duration": "155 min",
        "description": "Наследник знаменитого дома Атрейдесов Пол отправляется вместе с семьей на одну из самых опасных планет во Вселенной — Арракис. Здесь нет ничего, кроме песка, палящего солнца, гигантских чудовищ и основной причины межгалактических конфликтов — невероятно ценного ресурса, который называется меланж. В результате захвата власти Пол вынужден бежать и скрываться, и это становится началом его эпического путешествия. Враждебный мир Арракиса приготовил для него множество тяжелых испытаний, но только тот, кто готов взглянуть в глаза своему страху, достоин стать избранным. Экранизация научно-фантастического романа американского писателя Фрэнка Герберта."
    }, {
        "image": "http://37.221.162.250/uploads/posts/2021-09/1633008688_per.jpg",
        "titleLtu": "Persekiojimo auka",
        "titleEng": "Persecuted",
        "genre": ["Veiksmo", "Dramos", "Trileriai", "Mistiniai"],
        "imdbRating": 3.5,
        "year": 2014,
        "duration": "93 min",
        "description": "Džonas Liuteris - paskutinė kliūtis didelei religinei reformai Amerikoje, tad senatorius jį pagrobia bei melagingai apkaltina paauglės nužudymu. Prasideda sunkiai suvokiamų persekiojimų era. Pasprukęs Liuteris ieško tiesos ir prisiekia paviešinti visus, kurie prisidėjo prie merginos nužudymo ar juo pasinaudojo. Vykdydamas misiją jis susidurs su persekiojimais, kurie grasina sunaikinti visą Amerikos krikščionių bendruomenę."
    }, {
        "image": "http://37.221.162.250/uploads/posts/2021-10/1634549951_dance.jpg",
        "titleLtu": "Mirtini šokiai",
        "titleEng": "Dance to Death",
        "genre": ["Veiksmo", "Dramos", "Moksliniai"],
        "imdbRating": 2.8,
        "year": 2017,
        "duration": "90 min",
        "description": "2070-ieji. Maskva. Pasaulis skendi branduolinio karo griuvėsiuose. O žmonijos išlikimas priklauso nuo žiauraus šokių turnyro dalyvių energijos… Bet kai vienas iš pretendentų įsimyli merginą, konkurso dalyvę, ir bet kokia kaina nusprendžia išgelbėti jos gyvybę, kyla grėsmė nusistovėjusiai sistemai…"
    }, {
        "image": "http://37.221.162.250/uploads/posts/2021-10/1634732404_titane.jpg",
        "titleLtu": "Titanė",
        "titleEng": "Titane",
        "genre": ["Dramos", "Siaubo", "Trileriai", "Moksliniai"],
        "imdbRating": 7.1,
        "year": 2021,
        "duration": "108 min",
        "description": "Following a series of unexplained crimes, a father is reunited with the son who has been missing for 10 years. Titane: A metal highly resistant to heat and corrosion, with high tensile strength alloys."
    }, {
        "image": "http://37.221.162.250/uploads/posts/2021-10/1634731932_macho.jpg",
        "titleLtu": "Vyriškos ašaros",
        "titleEng": "Cry Macho",
        "genre": ["Dramos", "Trileriai", "Vesternai"],
        "imdbRating": 5.8,
        "year": 2021,
        "duration": "104 min",
        "description": "Mike'as Milo imasi buvusio viršininko darbo, kad parvežtų namo jaunąjį sūnų iš Meksikos."
    }, {
        "image": "http://37.221.162.250/uploads/posts/2021-10/1634731693_college.jpg",
        "titleLtu": "Kelionė po koledžus",
        "titleEng": "College Road Trip",
        "genre": ["Komedijos", "Dramos", "Nuotykiai", "Šeimai"],
        "imdbRating": 4.3,
        "year": 2008,
        "duration": "83 min",
        "description": "When an overachieving high school student decides to travel around the country to choose the perfect college, her overprotective cop father decides to accompany her to keep her on the straight and narrow."
    }, {
        "image": "http://37.221.162.250/uploads/posts/2021-10/1634731160_musical.jpg",
        "titleLtu": "Vidurinės mokyklos miuziklas 3",
        "titleEng": "High School Musical 3: Senior Year",
        "genre": ["Komedijos", "Dramos", "Romantiniai", "Šeimai", "Muzikiniai"],
        "imdbRating": 4.9,
        "year": 2008,
        "duration": "117 min",
        "description": "As seniors in high school, Troy and Gabriella struggle with the idea of being separated from one another as college approaches. Along with the rest of the Wildcats, they stage a spring musical to address their experiences, hopes and fears about their future."
    }, {
        "image": "http://37.221.162.250/uploads/posts/2021-10/1634730926_force.jpg",
        "titleLtu": "G Būrys",
        "titleEng": "G-Force",
        "genre": ["Veiksmo", "Animaciniai", "Komedijos", "Fantastiniai", "Nuotykiai", "Šeimai"],
        "imdbRating": 5.1,
        "year": 2009,
        "duration": "88 min",
        "description": "A specially trained squad of guinea pigs is dispatched to stop a diabolical billionaire from taking over the world."
    }, {
        "image": "http://37.221.162.250/uploads/posts/2021-10/1634730517_copshop.jpg",
        "titleLtu": "Jokių liudininkų",
        "titleEng": "Copshop",
        "genre": ["Veiksmo", "Trileriai", "Kriminaliniai"],
        "imdbRating": 6.3,
        "year": 2021,
        "duration": "Veiksmo · Trileriai · Kriminaliniai",
        "description": "В маленьком городке в жестоком противостоянии сталкиваются профессиональный киллер и знаменитый аферист. Между молотом и наковальней оказывается девушка-новичок, едва успевшая заступить на службу в местный полицейский участок."
    }, {
        "image": "http://37.221.162.250/uploads/posts/2021-10/1634730203_night.jpg",
        "titleLtu": "Nakties iltys",
        "titleEng": "Night Teeth",
        "genre": ["Veiksmo", "Dramos", "Siaubo", "Trileriai", "Kriminaliniai"],
        "imdbRating": 6.1,
        "year": 2021,
        "duration": "Veiksmo · Dramos · Siaubo · Trileriai · Kriminaliniai",
        "description": "A college student moonlighting as a chauffeur picks up two mysterious women for a night of party-hopping across LA. But when he uncovers their bloodthirsty intentions - and their dangerous, shadowy underworld - he must fight to stay alive."
    }, {
        "image": "http://37.221.162.250/uploads/posts/2021-10/1634730081_lost.jpg",
        "titleLtu": "Pasiklydę per Kalėdas",
        "titleEng": "Lost at Christmas",
        "genre": ["Komedijos", "Romantiniai"],
        "imdbRating": 5.2,
        "year": 2020,
        "duration": "101 min",
        "description": "In this feel good festive romance, two strangers come together to try and get home for Christmas."
    }, {
        "image": "http://37.221.162.250/uploads/posts/2021-10/1634729839_killed.jpg",
        "titleLtu": "Vaikinas, kuris nužudė mano tėvus",
        "titleEng": "The Boy Who Killed My Parents",
        "genre": ["Dramos", "Trileriai", "Kriminaliniai"],
        "imdbRating": 6.2,
        "year": 2021,
        "duration": "Dramos · Trileriai · Kriminaliniai",
        "description": "The film presents de Suzane von Richthofen's point of view of the events that led to the death of her parents. A real crime drama about one of the most shocking murder cases of Brazil."
    }, {
        "image": "http://37.221.162.250/uploads/posts/2021-10/1634728852_runt.jpg",
        "titleLtu": "Runt",
        "titleEng": "",
        "genre": ["Dramos", "Trileriai"],
        "imdbRating": 6,
        "year": 2020,
        "duration": "95 min",
        "description": "Neglected and unsupervised, a group of high school seniors are pulled into a downward cycle of violence."
    }, {
        "image": "http://37.221.162.250/uploads/posts/2021-10/1634728665_whitetail.jpg",
        "titleLtu": "Baltauodegis",
        "titleEng": "Whitetail",
        "genre": ["Trileriai"],
        "imdbRating": 6.3,
        "year": 2021,
        "duration": "119 min",
        "description": "WHITETAIL follows a broken family consisting of a father, an uncle and the son as they embark on a weekend hunting trip out in West Texas. The mother has recently died of an overdose and the trio hope to get away from it all by being out in nature and hunting. Instead they find a mysterious man, shot in the stomach and clutching onto a backpack full of money. Who shot the man? Where did the money come from, and how long will they survive while criminals are all out looking for the cash?"
    }, {
        "image": "http://37.221.162.250/uploads/posts/2021-09/1632994219_mosul.jpg",
        "titleLtu": "Mosulas",
        "titleEng": "Mosul",
        "genre": ["Veiksmo", "Dramos"],
        "imdbRating": 7.2,
        "year": 2019,
        "duration": "86 min",
        "description": "Mosulo policijos komanda kaunasi su ISIS sukilėliais dėl šio Irako miesto išvadavimo."
    }, {
        "image": "http://37.221.162.250/uploads/posts/2021-10/1634645281_sec.jpg",
        "titleLtu": "Paslaptingas sodas",
        "titleEng": "The secret garden",
        "genre": ["Animaciniai", "Šeimai"],
        "imdbRating": 6.2,
        "year": 1994,
        "description": "Istorija apie jauną našlaitę, kuri ateina gyventi pas dėdė i jo paslaptingą šeimą ir atranda užrakintą sodą, kuris tampa didžiausia paslaptimi!"
    }, {
        "image": "http://37.221.162.250/uploads/posts/2021-10/1634643913_ins.jpg",
        "titleLtu": "Inspektorius Belami",
        "titleEng": "Inspector Bellamy",
        "genre": ["Dramos", "Trileriai", "Kriminaliniai"],
        "imdbRating": 5.9,
        "year": 2009,
        "duration": "Dramos · Trileriai · Kriminaliniai",
        "description": "Kaip ir kasmet, inspektorius Polas Belami kartu su žmona praleidžia kelias dienas tėvų namuose. Žmona svajoja apie egzotiškas keliones ir tolimus kraštus, o vyras tiesiog nekenčia kelionių. Todėl Polui tenka labai pasistengti, kad išlaikytų mylimą žmoną namie. Bet netrukus malonų poilsį sudrumsčia pasirodęs Polo įbrolis Žakas – avantiūristas, triukšmadarys, tinginys ir girtuoklis. Dar jį kankina pavydas dėl Polo šeimos laimės. Žako atvykimas sujaukia žmonos ramybę – juk ji dabar turi rūpinti ir vyru, ir jo įbroliu. Lyg to būtų maža, sode pasirodęs nepažįstamasis prašo inspektoriaus apsaugos. Nelaimės nuojauta tiesiog tvyro ore."
    }, {
        "image": "http://37.221.162.250/uploads/posts/2021-10/1634643547_dat.jpg",
        "titleLtu": "Tobulas vyras",
        "titleEng": "The Dating List",
        "genre": ["Komedijos", "Romantiniai"],
        "imdbRating": 6.5,
        "year": 2019,
        "duration": "82 min",
        "description": "Ebi gauna neįprastą užduotį – įvertinti pažinčių aplikacijoje užsiregistravusius vyrus ir rasti tą vienintelį, kuris tiktų leidybos įmonės vadovei Suzan į poras. Ieškodama tobulojo, mergina susipažįsta su Denu. Vyras atitinka visus Suzan reikalavimus, tačiau Ebi supranta, kad Denas yra ir jos svajonių princas. Kaip elgtis tokios situacijoje?"
    }, {
        "image": "http://37.221.162.250/uploads/posts/2021-10/1634642915_bomlt.jpg",
        "titleLtu": "Garsiau už bombas",
        "titleEng": "Louder Than Bombs",
        "genre": ["Dramos"],
        "imdbRating": 6.6,
        "year": 2015,
        "duration": "109 min",
        "description": "Praėjus trejiems metams po žmonos Izabelės žūties, Džynas vėl bando rasti ryšį su sūnumis – užsisklendusiu paaugliu Džona ir ką tik tėvu tapusiu Konradu. Namuose vis dar tvyro Izabelės dvasia, o namiškiai nepaliauja klausti „kodėl?“, net jei atsakymas jau seniai aiškus. Stumdami nuo savęs slogias mintis, jie ieško užmaršties – darbo, kompiuterinių žaidimų, sekso. Tačiau liūdesys, savas ir svetimas, visad greta. Kaip priimti kito skausmą, kai gerklę spaudžia savasis? Kaip atversti naują lapą ir išmokti gyventi toliau?rnrn„Filmo veikėjai bando susidoroti su netekties skausmu. Vis dėlto tai yra daugiau nei istorija apie sielvartą, tai filmas apie žmogaus tapatybę ir atmintį, apie tai, kaip kiekvienas tuos pačius įvykius prisimena skirtingai ir kaip tai veikia jų asmenybes“, – sako režisierius Joachimas Trieras."
    }, {
        "image": "http://37.221.162.250/uploads/posts/2021-10/1634642166_ruf.jpg",
        "titleLtu": "Rufusas",
        "titleEng": "Rufus",
        "genre": ["Komedijos", "Šeimai"],
        "imdbRating": 5.5,
        "year": 2016,
        "duration": "60 min",
        "description": "Kai Manis sugalvoja norą prie stebuklingo amuleto, jo šuo Rufusas pavirsta tikru berniuku, ir jie siautėja mokykloje."
    }, {
        "image": "http://37.221.162.250/uploads/posts/2021-10/1634632551_peaceful.jpg",
        "titleLtu": "Taikus karys",
        "titleEng": "Peaceful Warrior",
        "genre": ["Dramos", "Romantiniai", "Sportas"],
        "imdbRating": 7.3,
        "year": 2006,
        "duration": "120 min",
        "description": "A chance encounter with a stranger changes the life of a college gymnast."
    }, {
        "image": "http://37.221.162.250/uploads/posts/2021-10/1634632454_days.jpg",
        "titleLtu": "Kaip atsikratyti vaikino per 10 dienų",
        "titleEng": "How to Lose a Guy in 10 Days",
        "genre": ["Komedijos", "Romantiniai"],
        "imdbRating": 6.4,
        "year": 2003,
        "duration": "116 min",
        "description": "Benjamin Barry is an advertising executive and ladies' man who, to win a big campaign, bets that he can make a woman fall in love with him in 10 days."
    }, {
        "image": "http://37.221.162.250/uploads/posts/2021-10/1634632375_breaking.jpg",
        "titleLtu": "Saulėlydis: Brėkštantis vėjas",
        "titleEng": "Breaking Wind",
        "genre": ["Komedijos"],
        "imdbRating": 2.3,
        "year": 2011,
        "duration": "83 min",
        "description": "A comedic spoof based on the worldwide phenomenon, The Twilight Saga."
    }, {
        "image": "http://37.221.162.250/uploads/posts/2021-10/1634632217_amazing.jpg",
        "titleLtu": "Nuostabi žiemos romantika",
        "titleEng": "Amazing Winter Romance",
        "genre": ["Komedijos", "Dramos", "Romantiniai"],
        "imdbRating": 6.1,
        "year": 2020,
        "duration": "90 min",
        "description": "When journalist Julia goes back home to find inspiration, she discovers her childhood friend has built a giant snow maze which prompts her to find her way to true love."
    }, {
        "image": "http://37.221.162.250/uploads/posts/2021-10/1634631540_christmas.jpg",
        "titleLtu": "Kalėdos karuselėje",
        "titleEng": "Christmas on the Carousel",
        "genre": ["Romantiniai", "Šeimai"],
        "imdbRating": 0,
        "year": 2021,
        "duration": "71 min",
        "description": "Four lifelong friends convene over winter break for their last Christmas at home together."
    }, {
        "image": "http://37.221.162.250/uploads/posts/2021-10/1634631161_east.jpg",
        "titleLtu": "Į rytus",
        "titleEng": "The East",
        "genre": ["Dramos", "Trileriai"],
        "imdbRating": 7,
        "year": 2020,
        "duration": "137 min",
        "description": "Jaunas olandų kareivis, išsiųstas malšinti pokario nepriklausomybės siekių Nyderlandų Indonezijos kolonijoje, yra tampomas pareigos ir sąžinės, kai paskiriamas į žiauraus vado elitinį būrį."
    }, {
        "image": "http://37.221.162.250/uploads/posts/2021-10/1634630354_disasters.jpg",
        "titleLtu": "Meilė, vestuvės ir kitos nelaimės",
        "titleEng": "Love, Weddings & Other Disasters",
        "genre": ["Komedijos", "Romantiniai"],
        "imdbRating": 5,
        "year": 2020,
        "duration": "96 min",
        "description": "It is a multi-story romantic comedy about the people who work on weddings to create the perfect day for a loving couple - while their own relationships are outlandish, odd, crazy and far from perfect."
    }, {
        "image": "http://37.221.162.250/uploads/posts/2021-10/1634833419_1.jpg",
        "titleLtu": "Kopa",
        "titleEng": "Dune",
        "genre": ["Veiksmo", "Dramos", "Moksliniai", "Nuotykiai"],
        "imdbRating": null,
        "year": 2021,
        "duration": "Nepasakyčiau kad filmas bombinis bet nu nieko. Aktoriai, garso takelis...bet mane jau nekaip nuteikė vien tai kad tai yra pirma dalis jau pradžioj pasakė. Ir jau žiūrėjau su mintim kad filmas bus be pabaigos. Pradžioj daug neaiškumo.",
        "description": "Pagal vieną garsiausių visų laikų fantastikos knygų – Frank‘o Herbert‘o „Kopą“ – sukurtas filmas pasakoja istoriją apie ypatingomis galiomis apdovanotą Polą Atreidą, kartu su visa savo kilminga gimine priverstą keliauti į tolimą, atšiaurią ir vieną pavojingiausių Visatoje dykumų planetą Arakį, dar vadinamą Kopa.Nors atšiaurus gyvenimui, Arakis yra ypatinga planeta, kadangi tik joje yra išgaunama vertingiausia Visatos medžiaga, pažadinanti ypatingas žmogaus proto galias. Daugėjant intrigų dėl siekio valdyti šio neįkainojamo ištekliaus gavybą, Polas ir jo motina priversti iškeliauti pas fremenus – dykumose gyvenančius vietinius Arakio gyventojus. Prasideda Polo Atreido kelionė link to, kuo tapti jam lemta nuo pat gimimo: žmogumi, kuris pakeis ne tik savo giminės, bet viso Arakio bei visos Visatos istoriją."
    }, {
        "image": "http://37.221.162.250/uploads/posts/2021-10/1634579084_meters.jpg",
        "titleLtu": "200 metrų",
        "titleEng": "200 Meters",
        "genre": ["Dramos", "Nuotykiai"],
        "imdbRating": 7.4,
        "year": 2020,
        "duration": "96 min",
        "description": "A Palestinian father trapped on the other side of the separation wall is trying to reach the hospital for his son."
    }, {
        "image": "http://37.221.162.250/uploads/posts/2021-10/1634578934_magical.jpg",
        "titleLtu": "Mikio stebuklingos Kalėdos",
        "titleEng": "Mickey's Magical Christmas: Snowed in at the House of Mouse",
        "genre": ["Animaciniai", "Šeimai"],
        "imdbRating": 6.7,
        "year": 2001,
        "duration": "61 min",
        "description": "Mickey and all his friends hold their own Christmas party at the House of Mouse, after being snowed in."
    }, {
        "image": "http://37.221.162.250/uploads/posts/2021-10/1634578811_princess.jpg",
        "titleLtu": "Princesės Dienoraštis",
        "titleEng": "The Princess Diaries",
        "genre": ["Komedijos", "Romantiniai", "Šeimai"],
        "imdbRating": 6.4,
        "year": 2001,
        "duration": "115 min",
        "description": "Mia Thermopolis has just found out that she is the heir apparent to the throne of Genovia. With her friends Lilly and Michael Moscovitz in tow, she tries to navigate through the rest of her sixteenth year."
    }, {
        "image": "http://37.221.162.250/uploads/posts/2021-10/1634578595_atlantis.jpg",
        "titleLtu": "Atlantida: Prarastoji imperija",
        "titleEng": "Atlantis: The Lost Empire",
        "genre": ["Animaciniai", "Šeimai"],
        "imdbRating": 6.9,
        "year": 2001,
        "duration": "95 min",
        "description": "A young linguist named Milo Thatch joins an intrepid group of explorers to find the mysterious lost continent of Atlantis."
    }, {
        "image": "http://37.221.162.250/uploads/posts/2021-10/1634578581_tigger.jpg",
        "titleLtu": "Tigriuko filmas",
        "titleEng": "The Tigger Movie",
        "genre": ["Animaciniai", "Šeimai"],
        "imdbRating": 6.4,
        "year": 2000,
        "duration": "77 min",
        "description": "When all his friends throughout the Hundred Acre Wood are busy preparing for winter, Tigger decides to look for a clan he can call his own."
    }
]
const container = document.querySelector(".container")

// movies.map(x => {
//     container.innerHTML += `
// <div class="box">
//         <div class="gr1">
// <img src="${x.image}">
//         </div>
//         <div class="gr2">
// <h2>${x.titleEng}</h2>
// <h3>${x.titleLtu}</h3>
// <h4>IMDB: ${x.imdbRating}</h4>
// <h4>Year: ${x.year}</h4>
// <h4>Genre: ${x.genre}</h4>
// <p>${x.description}</p>
//         </div>
//     </div>
// `
// })
// const demo = document.getElementById("demo")
let y = document.getElementById("mySelect")


y.onchange = () => {
    container.innerHTML = null
    container.innerHTML = `Rating: ${input.value/10}`
    movies.map(x=> {
        if (x.genre.includes(y.value)) {
            let arr = []
            arr.push(x)
            for (let i = 0; i < arr.length; i++) {
                container.innerHTML += `
 <div class="box">
        <div class="gr1">
 <img src="${arr[i].image}">
         </div>
         <div class="gr2">
 <h2>${arr[i].titleEng}</h2>
 <h3>${arr[i].titleLtu}</h3>
 <h4>IMDB: ${arr[i].imdbRating}</h4>
 <h4>Year: ${arr[i].year}</h4>
 <h4>Genre: ${arr[i].genre}</h4>
 <p>${arr[i].description}</p>
         </div>
     </div>`
            }
        }
    })
}
const input = document.querySelector("input")
input.oninput = () => {
    container.innerHTML = `Rating: ${input.value/10}`
movies.map(x => {
    if (input.value >= x.imdbRating*10) {
        let arr1 = []
        arr1.push(x)
        for (let i = 0; i < arr1.length; i++) {
            container.innerHTML += `
 <div class="box">
        <div class="gr1">
 <img src="${arr1[i].image}">
         </div>
         <div class="gr2">
 <h2>${arr1[i].titleEng}</h2>
 <h3>${arr1[i].titleLtu}</h3>
 <h4>IMDB: ${arr1[i].imdbRating}</h4>
 <h4>Year: ${arr1[i].year}</h4>
 <h4>Genre: ${arr1[i].genre}</h4>
 <p>${arr1[i].description}</p>
         </div>
     </div>`
        }
    }
})
}