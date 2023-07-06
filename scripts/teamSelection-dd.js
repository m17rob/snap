function blockZoom() {
  let lastTouchEnd = 0;
  document.addEventListener(
    "touchend",
    (event) => {
      const now = new Date().getTime();
      if (now - lastTouchEnd <= 300) {
        event.preventDefault();
      }
      lastTouchEnd = now;
    },
    false
  );
}
window.addEventListener("load", function () {
  document.querySelector("#preloader").style.display = "block";
  setTimeout(function () {
    document
      .querySelector("#preloader")
      .classList.add("animate__animated", "animate__fadeOut");
    setTimeout(function () {
      document.querySelector("#preloader").style.opacity = "0";
      setTimeout(function () {
        document.querySelector("#preloader").style.display = "none";
        document
          .querySelector("#main-content")
          .classList.add("animate__animated", "animate__fadeIn");
        document.querySelector("#main-content").style.display = "block";

        setTimeout(function () {
          document.querySelector("#footer").style.display = "block";
        }, 500);

        setTimeout(function () {
          document
            .querySelector(".containerInfo")
            .classList.add("animate__animated", "animate__fadeIn", "vizibil");
        }, 1000);
      }, 500);
    }, 1000);
  }, 2000);
});

blockZoom();

var dict = {
  "Premier League": {
    tara: "competitions/flags/anglia.png",
    img: "competitions/premierLeague/premierLeagueIcon.png",
    suboptiuni: {
      Arsenal: "competitions/premierLeague/t1.png",
      "Aston Villa": "competitions/premierLeague/t2.png",
      Chelsea: "competitions/premierLeague/t3.png",
      Everton: "competitions/premierLeague/t4.png",
      Fulham: "competitions/premierLeague/t5.png",
      Liverpool: "competitions/premierLeague/t6.png",
      "Manchester City": "competitions/premierLeague/t7.png",
      "Manchester Utd": "competitions/premierLeague/t8.png",
      Newcastle: "competitions/premierLeague/t9.png",
      Tottenham: "competitions/premierLeague/t10.png",
      "West Ham": "competitions/premierLeague/t11.png",
      Burnley: "competitions/premierLeague/t12.png",
      "Crystal Palace": "competitions/premierLeague/t13.png",
      "Sheffield Utd": "competitions/premierLeague/t14.png",
      Wolves: "competitions/premierLeague/t15.png",
      Bournemouth: "competitions/premierLeague/t16.png",
      Brighton: "competitions/premierLeague/t17.png",
      Luton: "competitions/premierLeague/t18.png",
      Nottingham: "competitions/premierLeague/t19.png",
      Brentford: "competitions/premierLeague/t20.png",
    },
  },
  Championship: {
    tara: "competitions/flags/anglia.png",
    img: "competitions/Championship/Championship.png",
    suboptiuni: {
      Birmingham: "competitions/Championship/t1.png",
      Blackburn: "competitions/Championship/t2.png",
      Middlesbrough: "competitions/Championship/t3.png",
      Sunderland: "competitions/Championship/t4.png",
      "Bristol City": "competitions/Championship/t5.png",
      Cardiff: "competitions/Championship/t6.png",
      Coventry: "competitions/Championship/t7.png",
      Hull: "competitions/Championship/t8.png",
      Ipswich: "competitions/Championship/t9.png",
      Leicester: "competitions/Championship/t10.png",
      Norwich: "competitions/Championship/t11.png",
      Plymouth: "competitions/Championship/t12.png",
      Preston: "competitions/Championship/t13.png",
      QPR: "competitions/Championship/t14.png",
      "Sheffield Wed": "competitions/Championship/t15.png",
      Southampton: "competitions/Championship/t16.png",
      Stoke: "competitions/Championship/t17.png",
      Watford: "competitions/Championship/t18.png",
      "West Brom": "competitions/Championship/t19.png",
      Huddersfield: "competitions/Championship/t20.png",
      Leeds: "competitions/Championship/t21.png",
      Millwall: "competitions/Championship/t22.png",
      Swansea: "competitions/Championship/t23.png",
      Rotherham: "competitions/Championship/t24.png",
    },
  },
  LaLiga: {
    tara: "competitions/flags/spania.png",
    img: "competitions/LaLiga/laLiga.png",
    suboptiuni: {
      "Real Sociedad": "competitions/LaLiga/t1.png",
      "Las Palmas": "competitions/LaLiga/t2.png",
      Alaves: "competitions/LaLiga/t3.png",
      "Celta Vigo": "competitions/LaLiga/t4.png",
      Cadiz: "competitions/LaLiga/t5.png",
      Vallecano: "competitions/LaLiga/t6.png",
      "Real Madrid": "competitions/LaLiga/t7.png",
      Villarreal: "competitions/LaLiga/t8.png",
      Barcelona: "competitions/LaLiga/t9.png",
      "Atl. Madrid": "competitions/LaLiga/t10.png",
      Sevilla: "competitions/LaLiga/t11.png",
      Mallorca: "competitions/LaLiga/t12.png",
      Almeria: "competitions/LaLiga/t13.png",
      Valencia: "competitions/LaLiga/t14.png",
      "Ath. Bilbao": "competitions/LaLiga/t15.png",
      Betis: "competitions/LaLiga/t16.png",
      Getafe: "competitions/LaLiga/t17.png",
      Osasuna: "competitions/LaLiga/t18.png",
      Girona: "competitions/LaLiga/t19.png",
      Granada: "competitions/LaLiga/t20.png",
    },
  },
  LaLiga2: {
    tara: "competitions/flags/spania.png",
    img: "competitions/LaLiga2/LaLiga2.png",
    suboptiuni: {
      Gijon: "competitions/LaLiga2/t1.png",
      Elche: "competitions/LaLiga2/t2.png",
      Ferrol: "competitions/LaLiga2/t3.png",
      Tenerife: "competitions/LaLiga2/t4.png",
      Albacete: "competitions/LaLiga2/t5.png",
      Eibar: "competitions/LaLiga2/t6.png",
      "Burgos CF": "competitions/LaLiga2/t7.png",
      Cartagena: "competitions/LaLiga2/t8.png",
      Huesca: "competitions/LaLiga2/t9.png",
      "Racing Santander": "competitions/LaLiga2/t10.png",
      Espanyol: "competitions/LaLiga2/t11.png",
      Valladolid: "competitions/LaLiga2/t12.png",
      Zaragoza: "competitions/LaLiga2/t13.png",
      Levante: "competitions/LaLiga2/t14.png",
      Leganes: "competitions/LaLiga2/t15.png",
      Alcorcon: "competitions/LaLiga2/t16.png",
      "Villarreal B": "competitions/LaLiga2/t17.png",
      Mirandes: "competitions/LaLiga2/t18.png",
      "R. Oviedo": "competitions/LaLiga2/t19.png",
      Eldense: "competitions/LaLiga2/t20.png",
      Amorebieta: "competitions/LaLiga2/t21.png",
      Andorra: "competitions/LaLiga2/t22.png",
    },
  },
  Bundesliga: {
    tara: "competitions/flags/germania.png",
    img: "competitions/Bundesliga/Bundesliga.png",
    suboptiuni: {
      "Union Berlin": "competitions/Bundesliga/t1.png",
      Frankfurt: "competitions/Bundesliga/t2.png",
      Bayern: "competitions/Bundesliga/t3.png",
      Leverkusen: "competitions/Bundesliga/t4.png",
      Bremen: "competitions/Bundesliga/t5.png",
      Wolfsburg: "competitions/Bundesliga/t6.png",
      Bochum: "competitions/Bundesliga/t7.png",
      Dortmund: "competitions/Bundesliga/t8.png",
      Monchengladbach: "competitions/Bundesliga/t9.png",
      Hoffenheim: "competitions/Bundesliga/t10.png",
      Köln: "competitions/Bundesliga/t11.png",
      Mainz: "competitions/Bundesliga/t12.png",
      Freiburg: "competitions/Bundesliga/t13.png",
      Augsburg: "competitions/Bundesliga/t14.png",
      Stuttgart: "competitions/Bundesliga/t15.png",
      Darmstadt: "competitions/Bundesliga/t16.png",
      Heidenheim: "competitions/Bundesliga/t17.png",
      "RB Leipzig": "competitions/Bundesliga/t18.png",
    },
  },
  "2. Bundesliga": {
    tara: "competitions/flags/germania.png",
    img: "competitions/2.Bundesliga/2. Bundesliga.png",
    suboptiuni: {
      Braunschweig: "competitions/2.Bundesliga/t1.png",
      Dusseldorf: "competitions/2.Bundesliga/t2.png",
      Magdeburg: "competitions/2.Bundesliga/t3.png",
      Kiel: "competitions/2.Bundesliga/t4.png",
      Schalke: "competitions/2.Bundesliga/t5.png",
      "Hamburger SV": "competitions/2.Bundesliga/t6.png",
      Hannover: "competitions/2.Bundesliga/t7.png",
      Hertha: "competitions/2.Bundesliga/t8.png",
      Karlsruher: "competitions/2.Bundesliga/t9.png",
      Nurnberg: "competitions/2.Bundesliga/t10.png",
      Rostock: "competitions/2.Bundesliga/t11.png",
      Furth: "competitions/2.Bundesliga/t12.png",
      Wehen: "competitions/2.Bundesliga/t13.png",
      "St. Pauli": "competitions/2.Bundesliga/t14.png",
      Osnabruck: "competitions/2.Bundesliga/t15.png",
      Kaiserslautern: "competitions/2.Bundesliga/t16.png",
      Paderborn: "competitions/2.Bundesliga/t17.png",
      Elversberg: "competitions/2.Bundesliga/t18.png",
    },
  },
  "Serie A": {
    tara: "competitions/flags/italia.png",
    img: "competitions/SerieA/SerieA.png",
    suboptiuni: {
      Lecce: "competitions/SerieA/t1.png",
      Bologna: "competitions/SerieA/t2.png",
      Frosinone: "competitions/SerieA/t3.png",
      Genoa: "competitions/SerieA/t4.png",
      Napoli: "competitions/SerieA/t5.png",
      Udinese: "competitions/SerieA/t6.png",
      Monza: "competitions/SerieA/t7.png",
      Sassuolo: "competitions/SerieA/t8.png",
      Salernitana: "competitions/SerieA/t9.png",
      "AS Roma": "competitions/SerieA/t10.png",
      Inter: "competitions/SerieA/t11.png",
      Juventus: "competitions/SerieA/t12.png",
      Fiorentina: "competitions/SerieA/t13.png",
      "AC Milan": "competitions/SerieA/t14.png",
      Atalanta: "competitions/SerieA/t15.png",
      Lazio: "competitions/SerieA/t16.png",
      Cagliari: "competitions/SerieA/t17.png",
      Torino: "competitions/SerieA/t18.png",
      Empoli: "competitions/SerieA/t19.png",
      Verona: "competitions/SerieA/t20.png",
    },
  },
  "Ligue 1": {
    tara: "competitions/flags/franta.png",
    img: "competitions/Ligue1/Ligue 1.png",
    suboptiuni: {
      "Le Havre": "competitions/Ligue1/t1.png",
      Lille: "competitions/Ligue1/t2.png",
      Lorient: "competitions/Ligue1/t3.png",
      Metz: "competitions/Ligue1/t4.png",
      Monaco: "competitions/Ligue1/t5.png",
      Nantes: "competitions/Ligue1/t6.png",
      Nice: "competitions/Ligue1/t7.png",
      PSG: "competitions/Ligue1/t8.png",
      Strasbourg: "competitions/Ligue1/t9.png",
      Brest: "competitions/Ligue1/t10.png",
      Clermont: "competitions/Ligue1/t11.png",
      Montpellier: "competitions/Ligue1/t12.png",
      Reims: "competitions/Ligue1/t13.png",
      Marseille: "competitions/Ligue1/t14.png",
      Toulouse: "competitions/Ligue1/t15.png",
      Lens: "competitions/Ligue1/t16.png",
      Rennes: "competitions/Ligue1/t17.png",
      Lyon: "competitions/Ligue1/t18.png",
    },
  },
  "Ligue 2": {
    tara: "competitions/flags/franta.png",
    img: "competitions/Ligue2/Ligue 2.png",
    suboptiuni: {
      Auxerre: "competitions/Ligue2/t1.png",
      Caen: "competitions/Ligue2/t2.png",
      Grenoble: "competitions/Ligue2/t3.png",
      "St. Etienne": "competitions/Ligue2/t4.png",
      Valenciennes: "competitions/Ligue2/t5.png",
      "AC Ajaccio": "competitions/Ligue2/t6.png",
      Amiens: "competitions/Ligue2/t7.png",
      Angers: "competitions/Ligue2/t8.png",
      Bastia: "competitions/Ligue2/t9.png",
      Guingamp: "competitions/Ligue2/t10.png",
      Troyes: "competitions/Ligue2/t11.png",
      Laval: "competitions/Ligue2/t12.png",
      "Paris FC": "competitions/Ligue2/t13.png",
      "Pau FC": "competitions/Ligue2/t14.png",
      Rodez: "competitions/Ligue2/t15.png",
      "Quevilly Rouen": "competitions/Ligue2/t16.png",
      Sochaux: "competitions/Ligue2/t17.png",
      Dunkerque: "competitions/Ligue2/t18.png",
      Concarneau: "competitions/Ligue2/t19.png",
      Bordeaux: "competitions/Ligue2/t20.png",
    },
  },
  "Liga 1 - SuperLiga": {
    tara: "competitions/flags/romania.png",
    img: "competitions/Liga1-SuperLiga/Liga1-SuperLiga.png",
    suboptiuni: {
      "Farul Constanța": "competitions/Liga1-SuperLiga/t1.png",
      "Rapid București": "competitions/Liga1-SuperLiga/t2.png",
      FCSB: "competitions/Liga1-SuperLiga/t3.png",
      "'U' Cluj": "competitions/Liga1-SuperLiga/t4.png",
      "U Craiova 1948": "competitions/Liga1-SuperLiga/t5.png",
      "UTA Arad": "competitions/Liga1-SuperLiga/t6.png",
      "FC Botoșani": "competitions/Liga1-SuperLiga/t7.png",
      "Petrolul Ploiești": "competitions/Liga1-SuperLiga/t8.png",
      "CFR Cluj": "competitions/Liga1-SuperLiga/t9.png",
      "Dinamo București": "competitions/Liga1-SuperLiga/t10.png",
      "Oţelul Galaţi": "competitions/Liga1-SuperLiga/t11.png",
      "Poli Iași": "competitions/Liga1-SuperLiga/t12.png",
      "FC Voluntari": "competitions/Liga1-SuperLiga/t13.png",
      "Univ. Craiova": "competitions/Liga1-SuperLiga/t14.png",
      "Sepsi Sf. Gh.": "competitions/Liga1-SuperLiga/t15.png",
      "FC Hermannstadt": "competitions/Liga1-SuperLiga/t16.png",
    },
  },
  Eredivisie: {
    tara: "competitions/flags/olanda.png",
    img: "competitions/Eredivisie/Eredivisie.png",
    suboptiuni: {
      Almere: "competitions/Eredivisie/t1.png",
      Sittard: "competitions/Eredivisie/t2.png",
      "FC Volendam": "competitions/Eredivisie/t3.png",
      Waalwijk: "competitions/Eredivisie/t4.png",
      Zwolle: "competitions/Eredivisie/t5.png",
      PSV: "competitions/Eredivisie/t6.png",
      Ajax: "competitions/Eredivisie/t7.png",
      Twente: "competitions/Eredivisie/t8.png",
      Heerenveen: "competitions/Eredivisie/t9.png",
      Feyenoord: "competitions/Eredivisie/t10.png",
      Nijmegen: "competitions/Eredivisie/t11.png",
      Utrecht: "competitions/Eredivisie/t12.png",
      Alkmaar: "competitions/Eredivisie/t13.png",
      Vitesse: "competitions/Eredivisie/t14.png",
      "S. Rotterdam": "competitions/Eredivisie/t15.png",
      Heracles: "competitions/Eredivisie/t16.png",
      Excelsior: "competitions/Eredivisie/t17.png",
      "G.A. Eagles": "competitions/Eredivisie/t18.png",
    },
  },
  "Jupiler Pro League": {
    tara: "competitions/flags/belgia.png",
    img: "competitions/JupilerProLeague/JupilerProLeague.png",
    suboptiuni: {
      Antwerp: "competitions/JupilerProLeague/t1.png",
      Leuven: "competitions/JupilerProLeague/t2.png",
      Anderlecht: "competitions/JupilerProLeague/t3.png",
      "Cercle Brugge": "competitions/JupilerProLeague/t4.png",
      Charleroi: "competitions/JupilerProLeague/t5.png",
      "Club Brugge": "competitions/JupilerProLeague/t6.png",
      Genk: "competitions/JupilerProLeague/t7.png",
      Gent: "competitions/JupilerProLeague/t8.png",
      "KV Mechelen": "competitions/JupilerProLeague/t9.png",
      "St. Liege": "competitions/JupilerProLeague/t10.png",
      "St. Truiden": "competitions/JupilerProLeague/t11.png",
      Westerlo: "competitions/JupilerProLeague/t12.png",
      Eupen: "competitions/JupilerProLeague/t13.png",
      Kortrijk: "competitions/JupilerProLeague/t14.png",
      "Royale Union SG": "competitions/JupilerProLeague/t15.png",
      RWDM: "competitions/JupilerProLeague/t16.png",
    },
  },
  Premiership: {
    tara: "competitions/flags/scotia.png",
    img: "competitions/Premiership/Premiership.png",
    suboptiuni: {
      Hearts: "competitions/Premiership/t1.png",
      Hibernian: "competitions/Premiership/t2.png",
      Kilmarnock: "competitions/Premiership/t3.png",
      Motherwell: "competitions/Premiership/t4.png",
      "St. Mirren": "competitions/Premiership/t5.png",
      "Dundee FC": "competitions/Premiership/t6.png",
      Livingston: "competitions/Premiership/t7.png",
      "St. Johnstone": "competitions/Premiership/t8.png",
      "Ross County": "competitions/Premiership/t9.png",
      Celtic: "competitions/Premiership/t10.png",
      Rangers: "competitions/Premiership/t11.png",
      Aberdeen: "competitions/Premiership/t12.png",
    },
  },
  "Super League": {
    tara: "competitions/flags/elvetia.png",
    img: "competitions/SuperLeague/SuperLeague.png",
    suboptiuni: {
      Lausanne: "competitions/SuperLeague/t1.png",
      Lugano: "competitions/SuperLeague/t2.png",
      Servette: "competitions/SuperLeague/t3.png",
      "FC Basel": "competitions/SuperLeague/t4.png",
      "Young Boys": "competitions/SuperLeague/t5.png",
      Zurich: "competitions/SuperLeague/t6.png",
      Grasshoppers: "competitions/SuperLeague/t7.png",
      Luzern: "competitions/SuperLeague/t8.png",
      "St. Gallen": "competitions/SuperLeague/t9.png",
      Winterthur: "competitions/SuperLeague/t10.png",
      Yverdon: "competitions/SuperLeague/t11.png",
      "Lausanne Ouchy": "competitions/SuperLeague/t12.png",
    },
  },
  "Bundesliga AU": {
    tara: "competitions/flags/austria.png",
    img: "competitions/BundesligaAU/BundesligaAU.png",
    suboptiuni: {
      Tirol: "competitions/BundesligaAU/t1.png",
      Wolfsberger: "competitions/BundesligaAU/t2.png",
      Hartberg: "competitions/BundesligaAU/t3.png",
      "Austria Viena": "competitions/BundesligaAU/t4.png",
      LASK: "competitions/BundesligaAU/t5.png",
      "Rapid Viena": "competitions/BundesligaAU/t6.png",
      Salzburg: "competitions/BundesligaAU/t7.png",
      Altach: "competitions/BundesligaAU/t8.png",
      "A. Klagenfurt": "competitions/BundesligaAU/t9.png",
      "Sturm Graz": "competitions/BundesligaAU/t10.png",
      "A. Lustenau": "competitions/BundesligaAU/t11.png",
      "BW Linz": "competitions/BundesligaAU/t12.png",
    },
  },
  "FORTUNA:LIGA": {
    tara: "competitions/flags/cehia.png",
    img: "competitions/FORTUNALIGA/FORTUNALIGA.png",
    suboptiuni: {
      Slovacko: "competitions/FORTUNALIGA/t1.png",
      "Hradec Kralove": "competitions/FORTUNALIGA/t2.png",
      Bohemians: "competitions/FORTUNALIGA/t3.png",
      "Ceske Budejovice": "competitions/FORTUNALIGA/t4.png",
      Jablonec: "competitions/FORTUNALIGA/t5.png",
      Liberec: "competitions/FORTUNALIGA/t6.png",
      "Mlada Boleslav": "competitions/FORTUNALIGA/t7.png",
      Ostrava: "competitions/FORTUNALIGA/t8.png",
      Plzen: "competitions/FORTUNALIGA/t9.png",
      "Sigma Olomouc": "competitions/FORTUNALIGA/t10.png",
      "Slavia Praga": "competitions/FORTUNALIGA/t11.png",
      "Sparta Praga": "competitions/FORTUNALIGA/t12.png",
      Teplice: "competitions/FORTUNALIGA/t13.png",
      Zlin: "competitions/FORTUNALIGA/t14.png",
      Karvina: "competitions/FORTUNALIGA/t15.png",
      Pardubice: "competitions/FORTUNALIGA/t16.png",
    },
  },
  Superliga: {
    tara: "competitions/flags/danemarca.png",
    img: "competitions/Superliga/Superliga.png",
    suboptiuni: {
      "Hvidovre IF": "competitions/Superliga/t1.png",
      Vejle: "competitions/Superliga/t2.png",
      Silkeborg: "competitions/Superliga/t3.png",
      Aarhus: "competitions/Superliga/t4.png",
      Brondby: "competitions/Superliga/t5.png",
      "FC Copenhaga": "competitions/Superliga/t6.png",
      Lyngby: "competitions/Superliga/t7.png",
      Midtjylland: "competitions/Superliga/t8.png",
      Nordsjaelland: "competitions/Superliga/t9.png",
      Odense: "competitions/Superliga/t10.png",
      Randers: "competitions/Superliga/t11.png",
      Viborg: "competitions/Superliga/t12.png",
    },
  },
  Allsvenskan: {
    tara: "competitions/flags/suedia.png",
    img: "competitions/Allsvenskan/Allsvenskan.png",
    suboptiuni: {
      "Malmo FF": "competitions/Allsvenskan/t1.png",
      Elfsborg: "competitions/Allsvenskan/t2.png",
      Hacken: "competitions/Allsvenskan/t3.png",
      Djurgarden: "competitions/Allsvenskan/t4.png",
      Kalmar: "competitions/Allsvenskan/t5.png",
      Halmstad: "competitions/Allsvenskan/t6.png",
      Norrkoping: "competitions/Allsvenskan/t7.png",
      Brommapojkarna: "competitions/Allsvenskan/t8.png",
      Mjallby: "competitions/Allsvenskan/t9.png",
      Hammarby: "competitions/Allsvenskan/t10.png",
      Värnamo: "competitions/Allsvenskan/t11.png",
      Sirius: "competitions/Allsvenskan/t12.png",
      Degerfors: "competitions/Allsvenskan/t13.png",
      "AIK Stockholm": "competitions/Allsvenskan/t14.png",
      Göteborg: "competitions/Allsvenskan/t15.png",
      Varberg: "competitions/Allsvenskan/t16.png",
    },
  },
  Ekstraklasa: {
    tara: "competitions/flags/polonia.png",
    img: "competitions/Ekstraklasa/Ekstraklasa.png",
    suboptiuni: {
      Jagiellonia: "competitions/Ekstraklasa/t1.png",
      "Gornik Zabrze": "competitions/Ekstraklasa/t2.png",
      Korona: "competitions/Ekstraklasa/t3.png",
      "LKS Lodz": "competitions/Ekstraklasa/t4.png",
      Piast: "competitions/Ekstraklasa/t5.png",
      Slask: "competitions/Ekstraklasa/t6.png",
      Warta: "competitions/Ekstraklasa/t7.png",
      "Pogon Szczecin": "competitions/Ekstraklasa/t8.png",
      Legia: "competitions/Ekstraklasa/t9.png",
      Lech: "competitions/Ekstraklasa/t10.png",
      Zaglebie: "competitions/Ekstraklasa/t11.png",
      Cracovia: "competitions/Ekstraklasa/t12.png",
      Ruch: "competitions/Ekstraklasa/t13.png",
      "Widzew Lodz": "competitions/Ekstraklasa/t14.png",
      Radomiak: "competitions/Ekstraklasa/t15.png",
      Puszcza: "competitions/Ekstraklasa/t16.png",
      Rakow: "competitions/Ekstraklasa/t17.png",
      "Stal Mielec": "competitions/Ekstraklasa/t18.png",
    },
  },
  HNL: {
    tara: "competitions/flags/croatia.png",
    img: "competitions/HNL/HNL.png",
    suboptiuni: {
      "Din. Zagreb": "competitions/HNL/t1.png",
      "Hajduk Split": "competitions/HNL/t2.png",
      Osijek: "competitions/HNL/t3.png",
      Rijeka: "competitions/HNL/t4.png",
      "Slaven Belupo": "competitions/HNL/t5.png",
      Varazdin: "competitions/HNL/t6.png",
      "Istra 1961": "competitions/HNL/t7.png",
      "Lok. Zagreb": "competitions/HNL/t8.png",
      Rudes: "competitions/HNL/t9.png",
      Gorica: "competitions/HNL/t10.png",
    },
  },
  Eliteserien: {
    tara: "competitions/flags/norvegia.png",
    img: "competitions/Eliteserien/Eliteserien.png",
    suboptiuni: {
      "Bodo/Glimt": "competitions/Eliteserien/t1.png",
      Tromsø: "competitions/Eliteserien/t2.png",
      Brann: "competitions/Eliteserien/t3.png",
      Viking: "competitions/Eliteserien/t4.png",
      "Sarpsborg 08": "competitions/Eliteserien/t5.png",
      Molde: "competitions/Eliteserien/t6.png",
      Lilleström: "competitions/Eliteserien/t7.png",
      Strömsgodset: "competitions/Eliteserien/t8.png",
      Odd: "competitions/Eliteserien/t9.png",
      Stabaek: "competitions/Eliteserien/t10.png",
      Haugesund: "competitions/Eliteserien/t11.png",
      Rosenborg: "competitions/Eliteserien/t12.png",
      Vålerenga: "competitions/Eliteserien/t13.png",
      Sandefjord: "competitions/Eliteserien/t14.png",
      Aalesund: "competitions/Eliteserien/t15.png",
      "Ham-Kam": "competitions/Eliteserien/t16.png",
    },
  },
  "OTP Bank Liga": {
    tara: "competitions/flags/ungaria.png",
    img: "competitions/OTPBankLiga/OTPBankLiga.png",
    suboptiuni: {
      "MTK Budapest": "competitions/OTPBankLiga/t1.png",
      Debrecen: "competitions/OTPBankLiga/t2.png",
      DVTK: "competitions/OTPBankLiga/t3.png",
      Ujpest: "competitions/OTPBankLiga/t4.png",
      Paks: "competitions/OTPBankLiga/t5.png",
      Zalaegerszeg: "competitions/OTPBankLiga/t6.png",
      "MOL Fehervar": "competitions/OTPBankLiga/t7.png",
      Kecskemeti: "competitions/OTPBankLiga/t8.png",
      Mezokovesd: "competitions/OTPBankLiga/t9.png",
      Ferencvaros: "competitions/OTPBankLiga/t10.png",
      Kisvarda: "competitions/OTPBankLiga/t11.png",
      "Puskas Academy": "competitions/OTPBankLiga/t12.png",
    },
  },
  "Parva liga": {
    tara: "competitions/flags/bulgaria.png",
    img: "competitions/Parvaliga/Parvaliga.png",
    suboptiuni: {
      Beroe: "competitions/Parvaliga/t1.png",
      "Pirin Blagoevgrad": "competitions/Parvaliga/t2.png",
      "Botev Plovdiv": "competitions/Parvaliga/t3.png",
      "Cherno More": "competitions/Parvaliga/t4.png",
      "CSKA Sofia": "competitions/Parvaliga/t5.png",
      "Lok. Plovdiv": "competitions/Parvaliga/t6.png",
      Levski: "competitions/Parvaliga/t7.png",
      "Lok. Sofia": "competitions/Parvaliga/t8.png",
      "Slavia Sofia": "competitions/Parvaliga/t9.png",
      Etar: "competitions/Parvaliga/t10.png",
      "Botev Vratsa": "competitions/Parvaliga/t11.png",
      Ludogorets: "competitions/Parvaliga/t12.png",
      Hebar: "competitions/Parvaliga/t13.png",
      Arda: "competitions/Parvaliga/t14.png",
      "CSKA 1948 Sofia": "competitions/Parvaliga/t15.png",
      Krumovgrad: "competitions/Parvaliga/t16.png",
    },
  },
  "Ligat ha'Al": {
    tara: "competitions/flags/israel.png",
    img: "competitions/Ligatha'Al/Ligatha'Al.png",
    suboptiuni: {
      "B. Jerusalem": "competitions/LigatHa'Al/t1.png",
      Sakhnin: "competitions/LigatHa'Al/t2.png",
      Ashdod: "competitions/LigatHa'Al/t3.png",
      "M. Haifa": "competitions/LigatHa'Al/t4.png",
      "M. Tel Aviv": "competitions/LigatHa'Al/t5.png",
      "M. Petach Tikva": "competitions/LigatHa'Al/t6.png",
      "H. Tel Aviv": "competitions/LigatHa'Al/t7.png",
      Netanya: "competitions/LigatHa'Al/t8.png",
      "H. Beer Sheva": "competitions/LigatHa'Al/t9.png",
      "H. Petah Tikva": "competitions/LigatHa'Al/t10.png",
      "H. Haifa": "competitions/LigatHa'Al/t11.png",
      "Hapoel Jerusalem": "competitions/LigatHa'Al/t12.png",
      "Hapoel Hadera": "competitions/LigatHa'Al/t13.png",
      "Macc. Bnei Raina": "competitions/LigatHa'Al/t14.png",
    },
  },
  Veikkausliiga: {
    tara: "competitions/flags/finlanda.png",
    img: "competitions/Veikkausliiga/Veikkausliiga.png",
    suboptiuni: {
      KuPS: "competitions/Veikkausliiga/t1.png",
      HJK: "competitions/Veikkausliiga/t2.png",
      SJK: "competitions/Veikkausliiga/t3.png",
      Oulu: "competitions/Veikkausliiga/t4.png",
      Honka: "competitions/Veikkausliiga/t5.png",
      "Inter Turku": "competitions/Veikkausliiga/t6.png",
      KTP: "competitions/Veikkausliiga/t7.png",
      Ilves: "competitions/Veikkausliiga/t8.png",
      Haka: "competitions/Veikkausliiga/t9.png",
      Mariehamn: "competitions/Veikkausliiga/t10.png",
      Lahti: "competitions/Veikkausliiga/t11.png",
      VPS: "competitions/Veikkausliiga/t12.png",
    },
  },
};

function createBubble() {
  const bubbleParent = document.createElement("div");
  bubbleParent.id = "bubble";
  bubbleParent.classList.add("bubble-parent");

  const bubble = document.createElement("div");
  bubble.classList.add("bubble");

  const bubbleImg = document.createElement("img");
  bubbleImg.id = "bubbleImg";
  bubbleImg.src = "img/err.svg";
  bubbleImg.alt = "avertizare icon";

  const bubbleTxt = document.createElement("div");
  bubbleTxt.id = "bubbleTxt";
  bubbleTxt.classList.add("bubble__txt");
  bubbleTxt.textContent = "eroare nedeterminata.contactati suportul";

  bubble.appendChild(bubbleImg);
  bubble.appendChild(bubbleTxt);
  bubbleParent.appendChild(bubble);

  document.body.appendChild(bubbleParent);

  return bubbleParent;
}

let animationTimeout;

function animateBubbleBtn(text, imgSrc, bgColor, container) {
  const oldBubbleBtn = container.querySelector(".bubble-btn");
  if (oldBubbleBtn) {
    oldBubbleBtn.classList.remove(
      "animate__animated",
      "animate__fadeOut",
      "animate__bounceIn"
    );
    oldBubbleBtn.remove();
    clearTimeout(animationTimeout);
  }

  const bubbleBtn = createBubble();
  const bubbleTxt = bubbleBtn.querySelector("#bubbleTxt");
  const bubbleImg = bubbleBtn.querySelector("#bubbleImg");
  const bubble = bubbleBtn.querySelector(".bubble");

  bubbleTxt.textContent = text;
  bubbleImg.src = imgSrc;
  bubble.style.backgroundColor = bgColor;

  bubbleBtn.classList.add(
    "animate__animated",
    "animate__bounceIn",
    "bubble-btn"
  );
  container.appendChild(bubbleBtn);

  animationTimeout = setTimeout(function () {
    bubbleBtn.classList.add("animate__animated", "animate__fadeOut");
    bubbleBtn.classList.remove(
      "animate__animated",
      "animate__fadeOut",
      "animate__bounceIn"
    );

    setTimeout(function () {
      bubbleBtn.remove();
    }, 1000);
  }, 2000);
}

const bubbleContainer = document.getElementById("bubbleContainer");

const dropdown = document.getElementById("dropdown");

const dropdownBtn = document.createElement("button");
dropdownBtn.innerHTML = `Alege un campionat<img id="rotate" src="img/dropdown-arrow.svg" alt="dropdown arrow" class="ddarrow"> `;
dropdownBtn.classList.add("dropdown-btn");
dropdown.appendChild(dropdownBtn);

const options = Object.keys(dict);
const dropdownOptions = document.createElement("ul");
dropdownOptions.classList.add("dropdown-options");

options.forEach((option) => {
  const listItem = document.createElement("li");
  listItem.textContent = option;
  listItem.classList.add("dropdown-option");

  const img = document.createElement("img");
  img.setAttribute("src", dict[option].img);
  listItem.insertBefore(img, listItem.firstChild);

  const img2 = document.createElement("img");
  img2.setAttribute("src", dict[option].tara);
  listItem.insertBefore(img2, img);
  img2.classList.add("tara");

  listItem.addEventListener("click", () => {
    const subBtn = document.getElementById("submitButton");
    const subVS = document.getElementById("VSub");
    const tag = document.getElementById("tag");
    dropdownBtn.innerHTML = `<div class="pOne"><img src="${dict[option].img}" alt="${option}" class="dropdown-option-img"> ${option}</div><img id="rotate" src="img/dropdown-arrow.svg" alt="dropdown arrow" class="ddarrow">`;
    dropdownOptions.classList.remove("show");
    subBtn.classList.add("show");
    subVS.classList.add("show");
    tag.classList.add("show", "animate__animated", "animate__fadeIn");
    const subdropdown = document.getElementById("subdropdown");
    subdropdown.innerHTML = "";
    const subdropdownBtn = document.createElement("button");
    subdropdownBtn.classList.add("dropdown-btn");
    document
      .querySelector(".subselectori")
      .classList.add("animate__animated", "animate__fadeIn");
    subBtn.classList.add("animate__animated", "animate__fadeIn");
    setTimeout(function () {
      subBtn.classList.add("blob", "white");
    }, 1000);
    subdropdownBtn.setAttribute("id", "subSelect1");
    subdropdownBtn.innerHTML =
      '<div id="justCont"><div class="teamTxt">Alege echipa</div><div class="teamArrow"><img class="arrow" src="img/teams-arrow.svg" alt="team arrow"></div></div> ';
    subdropdown.appendChild(subdropdownBtn);
    const subdropdownOptions = document.createElement("div");
    subdropdownOptions.classList.add("subdropdown-options");

    subdropdown.appendChild(subdropdownOptions);
    for (const suboption in dict[option].suboptiuni) {
      const suboptionImg = dict[option].suboptiuni[suboption];
      const suboptionHTML = `<div class="dropdown-option" data-suboption="${suboption}"><div class="w20 ml10"><img src="${suboptionImg}" alt="${suboption}" class="dropdown-option-img"> </div> ${suboption} </div>`;
      subdropdownOptions.insertAdjacentHTML("beforeend", suboptionHTML);
    }
    subdropdownBtn.addEventListener("click", () => {
      subdropdownOptions.classList.toggle("show");
      document.querySelector(".subdropdown-options2").classList.remove("show");
      document.querySelector(".dropdown-options").classList.remove("show");
    });

    document.querySelector(".dropdown-btn").addEventListener("click", () => {
      document.querySelector(".subdropdown-options2").classList.remove("show");
      document.querySelector(".subdropdown-options").classList.remove("show");
    });

    const suboptionElements =
      subdropdownOptions.querySelectorAll(".dropdown-option");
    suboptionElements.forEach((suboptionElement) => {
      suboptionElement.addEventListener("click", () => {
        const selectedSuboption =
          suboptionElement.getAttribute("data-suboption");
        subdropdownBtn.innerHTML = `<div id="justCont"><div class="pOne"><div class="w20"><img src="${dict[option].suboptiuni[selectedSuboption]}" alt="${selectedSuboption}" class="dropdown-option-img"> </div> ${selectedSuboption}</div><div class="teamArrow"><img src="img/teams-arrow.svg" alt="team arrow"></div></div> `;

        subdropdownOptions.classList.remove("show");
      });
    });

    const subdropdown2 = document.getElementById("subdropdown2");
    subdropdown2.innerHTML = "";
    const subdropdownBtn2 = document.createElement("button");
    subdropdownBtn2.classList.add("dropdown-btn");
    subdropdownBtn2.setAttribute("id", "subSelect2");
    subdropdownBtn2.innerHTML =
      ' <div id="justCont"><div class="teamTxt">Alege echipa</div><div class="teamArrow"><img src="img/teams-arrow.svg" alt="team arrow"></div></div>';
    subdropdown2.appendChild(subdropdownBtn2);
    const subdropdownOptions2 = document.createElement("div");
    subdropdownOptions2.classList.add("subdropdown-options2");
    subdropdown2.appendChild(subdropdownOptions2);
    for (const suboption2 in dict[option].suboptiuni) {
      const suboptionImg2 = dict[option].suboptiuni[suboption2];
      const suboptionHTML2 = `<div class="dropdown-option" data-suboption2="${suboption2}">
                          <div class="w20 ml10"> <img src="${suboptionImg2}" alt="${suboption2}" class="dropdown-option-img"> </div>
                           ${suboption2}
                         </div>`;
      subdropdownOptions2.insertAdjacentHTML("beforeend", suboptionHTML2);
    }

    subdropdownBtn2.addEventListener("click", () => {
      subdropdownOptions2.classList.toggle("show");
      document.querySelector(".subdropdown-options").classList.remove("show");
      document.querySelector(".dropdown-options").classList.remove("show");
    });

    const suboptionElements2 =
      subdropdownOptions2.querySelectorAll(".dropdown-option");
    suboptionElements2.forEach((suboptionElement2) => {
      suboptionElement2.addEventListener("click", () => {
        const selectedSuboption2 =
          suboptionElement2.getAttribute("data-suboption2");
        subdropdownBtn2.innerHTML = `<div id="justCont"><div class="pOne"><div class="w20"><img src="${dict[option].suboptiuni[selectedSuboption2]}" alt="${selectedSuboption2}" class="dropdown-option-img"></div>${selectedSuboption2}</div><div class="teamArrow"><img src="img/teams-arrow.svg" alt="team arrow"></div></div> `;
        subdropdownOptions2.classList.remove("show");
      });
    });
  });

  dropdownOptions.appendChild(listItem);
});

dropdown.appendChild(dropdownOptions);

dropdownBtn.addEventListener("click", () => {
  dropdownOptions.classList.toggle("show");
});

var pronos = [
  { prono: "1", probabilitate: 0.33 },
  { prono: "X", probabilitate: 0.3 },
  { prono: "2", probabilitate: 0.37 },
  { prono: "1X", probabilitate: 0.7 },
  { prono: "X2", probabilitate: 0.68 },
  { prono: "12", probabilitate: 0.83 },
  { prono: "GG", probabilitate: 0.6 },
  { prono: "PsF 1", probabilitate: 0.55 },
  { prono: "PsF 2", probabilitate: 0.45 },
  { prono: "PsF X", probabilitate: 0.25 },
  { prono: "peste 1.5g", probabilitate: 0.7 },
  { prono: "peste 2.5g", probabilitate: 0.45 },
  { prono: "peste 3.5g", probabilitate: 0.2 },
  { prono: "sub 2.5g", probabilitate: 0.5 },
  { prono: "sub 3.5g", probabilitate: 0.82 },
  { prono: "gazde +0.5g", probabilitate: 0.7 },
  { prono: "gazde +1.5g", probabilitate: 0.6 },
  { prono: "oaspeti +0.5g", probabilitate: 0.7 },
  { prono: "oaspeti +1.5g", probabilitate: 0.45 },
  { prono: "1-3 goluri", probabilitate: 0.7 },
  { prono: "2-3 goluri", probabilitate: 0.65 },
  { prono: "2-4 goluri", probabilitate: 0.6 },
  { prono: "3-4 goluri", probabilitate: 0.3 },
  { prono: "3-5 goluri", probabilitate: 0.35 },
  { prono: "gazde 1-2g", probabilitate: 0.3 },
  { prono: "gazde 1-3g", probabilitate: 0.5 },
  { prono: "gazde 2-3g", probabilitate: 0.4 },
  { prono: "oaspeti 1-2g", probabilitate: 0.4 },
  { prono: "oaspeti 1-3g", probabilitate: 0.5 },
  { prono: "oaspeti 2-3g", probabilitate: 0.35 },
  { prono: "GG&3+", probabilitate: 0.4 },
  { prono: "NuGG&3+", probabilitate: 0.25 },
  { prono: "1/1", probabilitate: 0.02 },
  { prono: "2/2", probabilitate: 0.01 },
  { prono: "1/2", probabilitate: 0.03 },
  { prono: "2/1", probabilitate: 0.015 },
  { prono: "1&+1.5g", probabilitate: 0.6 },
  { prono: "2&+1.5g", probabilitate: 0.45 },
  { prono: "1&-3.5g", probabilitate: 0.6 },
  { prono: "2&-3.5g", probabilitate: 0.6 },
  { prono: "1X&+1.5g", probabilitate: 0.6 },
  { prono: "X2&+1.5g", probabilitate: 0.5 },
  { prono: "1X&-3.5g", probabilitate: 0.7 },
  { prono: "X2&-3.5g", probabilitate: 0.6 },
  { prono: "Gol 1-gazde", probabilitate: 0.3 },
  { prono: "Gol 1-oaspeti", probabilitate: 0.3 },
  { prono: "Rep1 1X", probabilitate: 0.5 },
  { prono: "Rep1 X2", probabilitate: 0.4 },
  { prono: "Rep1 12", probabilitate: 0.5 },
  { prono: "Rep2 1X", probabilitate: 0.5 },
  { prono: "Rep2 X2", probabilitate: 0.25 },
  { prono: "Rep2 12", probabilitate: 0.5 },
  { prono: "Rep1 +0.5g", probabilitate: 0.7 },
  { prono: "Rep1 +1.5g", probabilitate: 0.55 },
  { prono: "Rep2 +0.5g", probabilitate: 0.75 },
  { prono: "Rep2 +1.5g", probabilitate: 0.6 },
];

function validateForm() {
  const subSelect1 = document.getElementById("subSelect1");
  const subSelect2 = document.getElementById("subSelect2");
  const delIcon = document.getElementById("delIcon");
  var subSelect1Value = subSelect1.innerHTML;
  var subSelect2Value = subSelect2.innerHTML;

  if (
    subSelect1.querySelector('div[class="teamTxt"]') ||
    subSelect2.querySelector('div[class="teamTxt"]')
  ) {
    animateBubbleBtn(
      "Selectează echipele",
      "img/avertizare.svg",
      "#FF8B13",
      bubbleContainer
    );
  } else if (subSelect1.innerText === subSelect2.innerText) {
    animateBubbleBtn(
      "Nu poți selecta aceleași echipe",
      "img/err.svg",
      "#FF8B13",
      bubbleContainer
    );
  } else {
    animateBubbleBtn(
      "Meci generat cu succes 👇",
      "img/succes.svg",
      "#5D9C59",
      bubbleContainer
    );
    var probabilitateTotala = pronos.reduce(
      (acc, curr) => acc + curr.probabilitate,
      0
    );
    var numarAleator = Math.random() * probabilitateTotala;
    var pronosticAleator;

    for (var i = 0; i < pronos.length; i++) {
      if (numarAleator < pronos[i].probabilitate) {
        pronosticAleator = pronos[i].prono;
        break;
      }
      numarAleator -= pronos[i].probabilitate;
    }

    var resultText =
      "<div class=containerRes__container--L><div class=containerRes__container--L__one>" +
      subSelect1Value +
      "</div><div class=containerRes__container--L__two>" +
      subSelect2Value +
      "</div></div><div class=containerRes__container--R><div id=randomProno class=containerRes__container--R__one>" +
      pronosticAleator +
      "</div> <div class=containerRes__container--R__two><img id=pronoReload src=img/iconreload.svg alt=iconReload></div></div>";
    delIcon.classList.add("showFlex");

    var newDiv = document.createElement("div");
    newDiv.classList.add(
      "containerRes__container",
      "animate__animated",
      "animate__fadeIn"
    );
    newDiv.innerHTML = resultText;

    const existingDivs = document.querySelectorAll(
      ".containerRes__container--L"
    );

    for (let i = 0; i < existingDivs.length; i++) {
      const existingMatchup1 = existingDivs[i]
        .querySelector(".containerRes__container--L__one")
        .textContent.trim();
      const existingMatchup2 = existingDivs[i]
        .querySelector(".containerRes__container--L__two")
        .textContent.trim();

      const newMatchup1 = newDiv
        .querySelector(".containerRes__container--L__one")
        .textContent.trim();
      const newMatchup2 = newDiv
        .querySelector(".containerRes__container--L__two")
        .textContent.trim();

      if (
        (existingMatchup1 === newMatchup1 &&
          existingMatchup2 === newMatchup2) ||
        (existingMatchup1 === newMatchup2 && existingMatchup2 === newMatchup1)
      ) {
        animateBubbleBtn(
          "Acest meci a fost generat deja",
          "img/avertizare.svg",
          "#FF8B13",
          bubbleContainer
        );
        return;
      }
    }

    containerRes.appendChild(newDiv);

    var pronoReloadButtons = document.querySelectorAll("#pronoReload");
    pronoReloadButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        var div = button.closest(".containerRes__container--R");
        var randomPronoElement = div.querySelector(
          ".containerRes__container--R__one"
        );
        var probabilitateTotala = pronos.reduce(
          (acc, curr) => acc + curr.probabilitate,
          0
        );
        var numarAleator = Math.random() * probabilitateTotala;
        var pronosticAleator;

        for (var i = 0; i < pronos.length; i++) {
          if (numarAleator < pronos[i].probabilitate) {
            pronosticAleator = pronos[i].prono;
            break;
          }
          numarAleator -= pronos[i].probabilitate;
        }
        randomPronoElement.innerText = pronosticAleator;
      });
    });

    var randomPronoButtons = document.querySelectorAll("#randomProno");
    randomPronoButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        var div = button.closest(".containerRes__container--R");
        var randomPronoElement = div.querySelector(
          ".containerRes__container--R__one"
        );

        var probabilitateTotala = pronos.reduce(
          (acc, curr) => acc + curr.probabilitate,
          0
        );
        var numarAleator = Math.random() * probabilitateTotala;
        var pronosticAleator;

        for (var i = 0; i < pronos.length; i++) {
          if (numarAleator < pronos[i].probabilitate) {
            pronosticAleator = pronos[i].prono;
            break;
          }
          numarAleator -= pronos[i].probabilitate;
        }
        randomPronoElement.innerText = pronosticAleator;
      });
    });
  }
}

document.getElementById("submitButton").addEventListener("click", validateForm);

var delIcon = document.getElementById("delIcon");

delIcon.addEventListener("click", function () {
  animateBubbleBtn(
    "Stergerea s-a realizat cu succes",
    "img/deleteIcon.svg",
    "#5D9C59",
    bubbleContainer
  );
  var containerRes = document.getElementById("containerRes");
  var firstDiv = containerRes.firstElementChild;
  while (containerRes.children.length > 1) {
    containerRes.removeChild(containerRes.lastChild);
  }
  containerRes.appendChild(firstDiv);

  this.classList.remove("showFlex");
});

const closeButton = document.querySelector("#closeBtn");
const containerInfo = document.querySelector("#containerInfo-s");
const mainContentInfo = document.querySelector(".leagueSelection");

closeButton.addEventListener("click", function () {
  containerInfo.classList.add("animate__animated", "animate__fadeOut");

  containerInfo.addEventListener("animationend", function () {
    containerInfo.remove();
  });
});

// MENU

const menuButton = document.getElementById("menu");
const closeMenuButton = document.getElementById("closeMenu");
const menuContainer = document.querySelector(".menuContainer");
const mainContentMenu = document.getElementById("main-content");
const bubbleBlur = document.querySelector("#bubbleContainer");

menuButton.addEventListener("click", function () {
  menuContainer.classList.add(
    "showMenu",
    "animate__animated",
    "animate__fadeInRight"
  );
  mainContentMenu.style.filter = "blur(2px)";
  bubbleBlur.style.filter = "blur(0px)";
  document.addEventListener("click", closeMenu);
});

closeMenuButton.addEventListener("click", function () {
  mainContentMenu.style.filter = "none";
  menuContainer.classList.add(
    "animate__animated",
    "animate__fadeOutRight",
    "animate__fadeInLeft"
  );
  setTimeout(function () {
    menuContainer.classList.remove(
      "showMenu",
      "animate__animated",
      "animate__fadeOutRight",
      "animate__fadeInLeft"
    );
  }, 500);

  document.removeEventListener("click", closeMenu);
});

function closeMenu(event) {
  if (!menuContainer.contains(event.target) && event.target !== menuButton) {
    menuContainer.classList.add(
      "animate__animated",
      "animate__fadeOutRight",
      "animate__fadeInLeft"
    );
    mainContentMenu.style.filter = "none";
    setTimeout(function () {
      menuContainer.classList.remove(
        "showMenu",
        "animate__animated",
        "animate__fadeOutRight",
        "animate__fadeInLeft"
      );
    }, 500);

    document.removeEventListener("click", closeMenu);
  }
}

const btnHome = document.getElementById("btnHome");

btnHome.addEventListener("click", function () {
  setTimeout(function () {
    window.location.assign("/");
  }, 400);
});

const dropdownBtn1 = document.querySelector(".dropdown-btn");
const ddArrow = document.querySelector("#rotate");

dropdownBtn1.addEventListener("click", function () {
  this.classList.toggle("active");
  ddArrow.classList.toggle("rotate");
});

const btnG = document.querySelector(".btnG");

btnG.addEventListener("click", () => {
  window.location.href = "/bilete-castigatoare";
});

const disBtn = document.querySelector("#dis");

dis.addEventListener("click", () => {
  setTimeout(() => {
    window.location.href = "/disclaimer";
  }, 300); // 500ms = 0.5s
});

document.addEventListener("click", function (event) {
  var dropdown = document.querySelector(".dropdown-options.show");
  var subdropdown = document.querySelector(".subdropdown-options.show");
  var subdropdown2 = document.querySelector(".subdropdown-options2.show");

  if (
    dropdown &&
    !dropdown.contains(event.target) &&
    !event.target.matches(".dropdown-btn, .dropdown-btn *")
  ) {
    dropdown.classList.remove("show");
  }

  if (
    subdropdown &&
    !subdropdown.contains(event.target) &&
    !event.target.matches("#subSelect1, #subSelect1 *")
  ) {
    subdropdown.classList.remove("show");
  }

  if (
    subdropdown2 &&
    !subdropdown2.contains(event.target) &&
    !event.target.matches("#subSelect2, #subSelect2 *")
  ) {
    subdropdown2.classList.remove("show");
  }
});

function redirectToPage(pageUrl) {
  window.location.href = pageUrl;
}
