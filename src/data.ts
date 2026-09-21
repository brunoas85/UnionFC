/**
 * EDITAR ESTE ARCHIVO CON LOS DATOS REALES DEL CLUB
 * Imágenes: copiá UnionEscudo.png y UnionPlantel.png a la carpeta /public del proyecto
 */

// Mapeo de nombres de equipos a logos
export const TEAM_LOGOS: Record<string, string> = {
  "Frontera": "/escudo-frontera.png",
  "Comunicaciones": "/escudo-comunicaciones.png",
  "Las Rosas": "/escudo-lasrosas.png",
  "Arenal": "/escudo-arenal.png",
  "Sarmiento": "/escudo-sarmiento.png",
  "Vélez": "/escudo-vélez.png",
  "Unión": "/UnionEscudo.png",
  "Dinamo": "/escudo-dinamo.png",
  "Dínamo": "/escudo-dinamo.png",
  "Embajadores": "/escudo-embajadores.png",
  "Chapelco": "/escudo-chapelco.png",
  "Lácar": "/escudo-lácar.png",
  "Patagonia": "/escudo-patagonia.png",
  "El Barrio": "/escudo-elbarrio.png",
  "All Boys": "/escudo-allBoys.png",
  "Belgrano": "/escudo-belgrano.png",
  "Dinosaurios": "/escudo-dinosaurios.png",
};

export const CLUB_INFO = {
  name: "Unión",
  location: "San Martín de los Andes",
  logo: "/UnionEscudo.png",
  heroImage: "/1º FECHA CLAU26(3).jpeg",
};

// Link de invitación al grupo de WhatsApp del equipo (WhatsApp > grupo > Datos del grupo > Invitar mediante enlace > Copiar enlace)
export const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/TU-CODIGO-DE-INVITACION";

export const NEXT_MATCH = {
  opponent: "Belgrano",
  opponentLogo: TEAM_LOGOS["Belgrano"],
  date: "Dom 27 de Septiembre",
  time: "13:30 HS",
  stadium: "Albino Stadium",
  round: "CLAUSURA 2026 · FECHA 4",
  isLocal: true,
};

export const PLAYERS = [
  { name: "Silva, Facundo Lujan", position: "Delantero", number: "1", avatar: "avatar-1.png" },
  { name: "Navarro, Cesar Andres", position: "Mediocampista", number: "2", avatar: "avatar-2.png" },
  { name: "Figueroa, Pablo Martin", position: "Defensor", number: "3", avatar: "avatar-3.png" },
  { name: "Figueroa, Nicolas Matias", position: "Mediocampista", number: "4", avatar: "avatar-4.png" },
  { name: "Durbhan, Sergio Sebastian", position: "Defensor", number: "5", avatar: "avatar-5.png" },
  { name: "Castro, Fernando Ezequiel", position: "Mediocampista", number: "6", avatar: "avatar-6.png" },
  { name: "Soto, Pedro Dario", position: "Defensor", number: "7", avatar: "avatar-7.png" },
  { name: "Corso, Luis Andres", position: "Defensor", number: "8", avatar: "avatar-8.png" },
  { name: "Figueroa, Cristian Leonardo", position: "Mediocampista", number: "9", avatar: "avatar-9.png" },
  { name: "Egea, Rodrigo Ariel", position: "Mediocampista", number: "10", avatar: "avatar-10.png" },
  { name: "Soto, Adrian Ezequiel", position: "Defensor", number: "11", avatar: "avatar-11.png" },
  { name: "Barria, Jonatan David", position: "Delantero", number: "12", avatar: "avatar-12.png" },
  { name: "Jara Neira, Carlos", position: "Mediocampista", number: "13", avatar: "avatar-13.png" },
  { name: "Figueroa, Jorge Luis", position: "Defensor", number: "14", avatar: "avatar-14.png" },
  { name: "Salazar, Bruno", position: "Mediocampista", number: "15", avatar: "avatar-15.png" },
  { name: "Flores, Maximiliano Ricardo", position: "Mediocampista", number: "16", avatar: "avatar-16.png" },
  { name: "Villegas, Cesar Oscar", position: "Defensor", number: "17", avatar: "avatar-17.png" },
  { name: "Vilchez, Jorge Luis", position: "Mediocampista", number: "18", avatar: "avatar-18.png" },
  { name: "Di Sciascio, Darien Emanuel", position: "Mediocampista", number: "19", avatar: "avatar-19.png" },
  { name: "Oliva, Horacio Sebastian", position: "Arquero", number: "21", avatar: "avatar-20.png" },
  { name: "Flores, Facundo Emilio", position: "Director Técnico", number: "DT", avatar: "avatar-21.png" },
];

// Plantel — Categoría Maxi (UNION EQUIPOS 2026.xlsx)
export const PLAYERS_MAXI = [
  { name: "Mamuchi, Dario Raul", position: "Director Técnico", number: "DT" },
  { name: "Brocardo, Martin Alberto", position: "Jugador", number: "2" },
  { name: "Rodriguez Basso, Emiliano Alberto", position: "Jugador", number: "3" },
  { name: "Gasparro, Diego Gabriel", position: "Jugador", number: "4" },
  { name: "Barruti, Facundo Esequiel", position: "Jugador", number: "5" },
  { name: "Brizuela, Juan Ignacio", position: "Jugador", number: "6" },
  { name: "Pissaco, Carlos Nicolas", position: "Jugador", number: "7" },
  { name: "Baron, Alejandro David", position: "Jugador", number: "8" },
  { name: "Sierra, Lucas Marcelo", position: "Jugador", number: "9" },
  { name: "Alvarez, Lucas Santiago", position: "Jugador", number: "10" },
  { name: "Lagrost, Roberto Esteban", position: "Jugador", number: "11" },
  { name: "Bagnat, Maximiliano", position: "Jugador", number: "12" },
  { name: "De Miguel, Fernando Agustin", position: "Jugador", number: "13" },
  { name: "Carrizo, Sebastian Fernando", position: "Jugador", number: "14" },
  { name: "Andreu, Gustavo Rene", position: "Jugador", number: "15" },
  { name: "Garcia Lemos, Carlos Alberto", position: "Jugador", number: "16" },
  { name: "Caldentey, Ernesto", position: "Jugador", number: "17" },
  { name: "Berretta, Fernando", position: "Jugador", number: "18" },
  { name: "Jara, Cristian", position: "Jugador", number: "19" },
  { name: "Romero, Pablo Gaston", position: "Jugador", number: "20" },
  { name: "Altube, Mauro Gastos", position: "Jugador", number: "21" },
  { name: "Prieto, Marcelo", position: "Jugador", number: "22" },
  { name: "Ordoñez, Augusto", position: "Jugador", number: "23" },
  { name: "Morate, Christian Alejandro", position: "Jugador", number: "24" },
];

// Plantel — Categoría Súper Maxi (UNION EQUIPOS 2026.xlsx)
export const PLAYERS_SUPERMAXI = [
  { name: "Muñoz, Eliseo Moises", position: "Ayudante de Campo", number: "AC" },
  { name: "Dutto, Pablo Fernando", position: "Jugador", number: "2" },
  { name: "Almada, Gustavo Daniel", position: "Jugador", number: "3" },
  { name: "Vranken, Christian Joel", position: "Jugador", number: "4" },
  { name: "Ayala, Emiliano Daniel", position: "Jugador", number: "5" },
  { name: "Houssey, Agustin", position: "Jugador", number: "6" },
  { name: "Tacone, Alejandro Ruben", position: "Jugador", number: "7" },
  { name: "Nuske, Humberto Fredy", position: "Jugador", number: "8" },
  { name: "Garnica, Marcelo", position: "Jugador", number: "9" },
  { name: "Pellegrini, Alejandro Julian", position: "Jugador", number: "10" },
  { name: "Baltazar, Alberto David", position: "Jugador", number: "11" },
  { name: "Bischoff, Marcelo Martin", position: "Jugador", number: "12" },
  { name: "Lopez, Pablo Daniel", position: "Jugador", number: "13" },
  { name: "Amil, Javier Sebastian", position: "Jugador", number: "14" },
  { name: "Blanco, Gustavo Agustin", position: "Jugador", number: "15" },
  { name: "Costa, Sergio Daniel", position: "Jugador", number: "16" },
  { name: "Galan, Alejandro Daniel", position: "Jugador", number: "17" },
  { name: "Laguna, Maximiliano Luis", position: "Jugador", number: "18" },
  { name: "Guerrero, Damian", position: "Jugador", number: "19" },
  { name: "Conde, Ariel Fernando", position: "Jugador", number: "20" },
  { name: "Vera, Daniel Gustavo", position: "Jugador", number: "21" },
];

// Plantel — Categoría Master (UNION EQUIPOS 2026.xlsx)
export const PLAYERS_MASTER = [
  { name: "Graziano, Jorge", position: "Jugador", number: "1" },
  { name: "Agnone, Hector", position: "Jugador", number: "2" },
  { name: "Moreno, Antonio", position: "Jugador", number: "3" },
  { name: "Cabrera, Abel Alcide", position: "Jugador", number: "4" },
  { name: "Payal, Leopoldo", position: "Jugador", number: "5" },
  { name: "Astete, Guillermo", position: "Jugador", number: "6" },
  { name: "Andrada, Alejandro", position: "Jugador", number: "7" },
  { name: "Bravo, Argentino", position: "Jugador", number: "8" },
  { name: "Huenteo, Domingo", position: "Jugador", number: "9" },
  { name: "Urra Ponce, Sergio", position: "Jugador", number: "10" },
  { name: "Cornaló, Fabian Hector", position: "Jugador", number: "11" },
  { name: "Rodriguez, Candelario Omar", position: "Jugador", number: "12" },
  { name: "Quintana Fica, Carlos M", position: "Jugador", number: "13" },
  { name: "Coliluan, Ernesto", position: "Jugador", number: "14" },
  { name: "Rimas, Adrian Horacio", position: "Jugador", number: "15" },
  { name: "Castillo, Santiago", position: "Jugador", number: "16" },
  { name: "Malagueño, Jose Gabriel", position: "Jugador", number: "17" },
  { name: "Kuasñosky, Gustavo Fabian", position: "Jugador", number: "18" },
  { name: "Cavalcanti, Jose Maria", position: "Jugador", number: "19" },
  { name: "Lavanderos, Lindor", position: "Jugador", number: "20" },
  { name: "Sepulveda, Modesto Honorio", position: "Jugador", number: "21" },
  { name: "Jara, Tomas Daniel", position: "Jugador", number: "22" },
  { name: "Saavedra, Nelson Ruben", position: "Jugador", number: "23" },
  { name: "Fernandez, Edgar Alfredo", position: "Jugador", number: "24" },
  { name: "Esteves, Emilio", position: "Jugador", number: "25" },
  { name: "Batifora, Christian", position: "Jugador", number: "26" },
  { name: "Barreiro, Cristian", position: "Jugador", number: "27" },
  { name: "Tevez, Mario", position: "Jugador", number: "28" },
  { name: "Valiña Lema, Javier Leonel", position: "Jugador", number: "29" },
];

// Tabla — Clausura 2026 — Categoría Seniors (recién arranca, todo en cero, tabla única sin zonas)
export const STANDINGS = [
  { pos: 1, name: "All Boys", pts: 0, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dif: 0, logo: "/escudo-allBoys.png" },
  { pos: 2, name: "Arenal", pts: 0, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dif: 0, logo: "/escudo-arenal.png" },
  { pos: 3, name: "Belgrano", pts: 0, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dif: 0, logo: "/escudo-belgrano.png" },
  { pos: 4, name: "Chapelco", pts: 0, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dif: 0, logo: "/escudo-chapelco.png" },
  { pos: 5, name: "Comunicaciones", pts: 0, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dif: 0, logo: "/escudo-comunicaciones.png" },
  { pos: 6, name: "Dinamo", pts: 0, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dif: 0, logo: "/escudo-dinamo.png" },
  { pos: 7, name: "Dinosaurios", pts: 0, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dif: 0, logo: "/escudo-dinosaurios.png" },
  { pos: 8, name: "El Barrio", pts: 0, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dif: 0, logo: "/escudo-elbarrio.png" },
  { pos: 9, name: "Embajadores", pts: 0, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dif: 0, logo: "/escudo-embajadores.png" },
  { pos: 10, name: "Frontera", pts: 0, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dif: 0, logo: "/escudo-frontera.png" },
  { pos: 11, name: "Lácar", pts: 0, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dif: 0, logo: "/escudo-lácar.png" },
  { pos: 12, name: "Las Rosas", pts: 0, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dif: 0, logo: "/escudo-lasrosas.png" },
  { pos: 13, name: "Patagonia", pts: 0, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dif: 0, logo: "/escudo-patagonia.png" },
  { pos: 14, name: "Sarmiento", pts: 0, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dif: 0, logo: "/escudo-sarmiento.png" },
  { pos: 15, name: "Unión", pts: 0, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dif: 0, isUserTeam: true, logo: "/UnionEscudo.png" },
  { pos: 16, name: "Vélez", pts: 0, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dif: 0, logo: "/escudo-vélez.png" },
];

// Aplica un resultado "goles local - goles visitante" a los dos equipos involucrados.
function applyResult(byName: Map<string, any>, home: string, away: string, resultado: string) {
  if (!resultado) return;
  const goles = resultado.split("-").map((n: string) => parseInt(n.trim(), 10));
  if (goles.length !== 2 || goles.some(Number.isNaN)) return;
  const [gHome, gAway] = goles;
  const teamHome = byName.get(home);
  const teamAway = byName.get(away);
  if (!teamHome || !teamAway) return;

  teamHome.pj += 1; teamAway.pj += 1;
  teamHome.gf += gHome; teamHome.gc += gAway;
  teamAway.gf += gAway; teamAway.gc += gHome;

  if (gHome > gAway) { teamHome.g += 1; teamHome.pts += 3; teamAway.p += 1; }
  else if (gHome < gAway) { teamAway.g += 1; teamAway.pts += 3; teamHome.p += 1; }
  else { teamHome.e += 1; teamAway.e += 1; teamHome.pts += 1; teamAway.pts += 1; }
}

// Calcula la tabla de posiciones a partir del fixture de Unión (formato "goles Unión - goles rival")
// y de los cruces de los demás equipos (formato "goles local - goles visitante").
export function computeStandings(fixture: any[] = FIXTURE, torneo: string = "Clausura 2026", otherMatches: any[] = OTHER_MATCHES) {
  const table = STANDINGS.map(t => ({ ...t, pts: 0, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dif: 0 }));
  const byName = new Map(table.map(t => [t.name, t]));

  fixture
    .filter((m: any) => (m.torneo ?? "Apertura 2026") === torneo && m.resultado)
    .forEach((m: any) => applyResult(byName, "Unión", m.rival, m.resultado));

  otherMatches
    .filter((m: any) => (m.torneo ?? torneo) === torneo && m.resultado)
    .forEach((m: any) => applyResult(byName, m.home, m.away, m.resultado));

  table.forEach(t => { t.dif = t.gf - t.gc; });
  table.sort((a, b) => b.pts - a.pts || b.dif - a.dif || b.gf - a.gf || a.name.localeCompare(b.name));
  table.forEach((t, i) => { t.pos = i + 1; });

  return table;
}

export const FIXTURE = [
  {
    match_number: 1,
    rival: "Frontera",
    date: "Dom 08 de Marzo",
    time: "10:00",
    stadium: "Albino Stadium",
    resultado: "1 - 2",
    logo: TEAM_LOGOS["Frontera"],
    torneo: "Apertura 2026",
  },
  {
    match_number: 2,
    rival: "Las Rosas",
    date: "Mar 10 de Marzo",
    time: "21:30",
    stadium: "Albino Stadium",
    resultado: "1 - 1",
    logo: TEAM_LOGOS["Las Rosas"],
    torneo: "Apertura 2026",
  },
  {
    match_number: 3,
    rival: "Sarmiento",
    date: "Dom 15 de Marzo",
    time: "13:30",
    stadium: "Albino Stadium",
    resultado: "2 - 3",
    logo: TEAM_LOGOS["Sarmiento"],
    torneo: "Apertura 2026",
  },
  {
    match_number: 4,
    rival: "Vélez",
    date: "Lun 23 de Marzo",
    time: "21:30",
    stadium: "Albino Stadium",
    resultado: "1 - 1",
    logo: TEAM_LOGOS["Vélez"],
    torneo: "Apertura 2026",
  },
  {
    match_number: 5,
    rival: "Arenal",
    date: "Dom 29 de Marzo",
    time: "13:30",
    stadium: "Albino Stadium",
    resultado: "1 - 4",
    logo: TEAM_LOGOS["Arenal"],
    torneo: "Apertura 2026",
  },
  {
    match_number: 6,
    rival: "Comunicaciones",
    date: "Dom 12 de Abril",
    time: "19:45",
    stadium: "Albino Stadium",
    resultado: "3 - 2",
    logo: TEAM_LOGOS["Comunicaciones"],
    torneo: "Apertura 2026",
  },
  {
    match_number: 7,
    rival: "Dínamo",
    date: "Dom 19 de Abril",
    time: "11:45",
    stadium: "Albino Stadium",
    resultado: "8 - 6",
    logo: TEAM_LOGOS["Dínamo"],
    torneo: "Apertura 2026",
  },
  {
    match_number: 8,
    rival: "Frontera",
    date: "Dom 26 de Abril",
    time: "17:00",
    stadium: "Albino Stadium",
    resultado: "1 - 7",
    logo: TEAM_LOGOS["Frontera"],
    torneo: "Apertura 2026",
  },
  {
    match_number: 9,
    rival: "Sarmiento",
    date: "Vie 01 de Mayo",
    time: "21:30",
    stadium: "Albino Stadium",
    resultado: "1 - 4",
    logo: TEAM_LOGOS["Sarmiento"],
    torneo: "Apertura 2026",
  },
  {
    match_number: 10,
    rival: "Vélez",
    date: "Vie 08 de Mayo",
    time: "21:30",
    stadium: "Albino Stadium",
    resultado: "0 - 1",
    logo: TEAM_LOGOS["Vélez"],
    torneo: "Apertura 2026",
  },
  {
    match_number: 11,
    rival: "Arenal",
    date: "Dom 17 de Mayo",
    time: "13:30",
    stadium: "Albino Stadium",
    resultado: "1 - 3",
    logo: TEAM_LOGOS["Arenal"],
    torneo: "Apertura 2026",
  },
  {
    match_number: 12,
    rival: "Las Rosas",
    date: "Mié 08 de Abril",
    time: "21:30",
    stadium: "Albino Stadium",
    resultado: "2 - 3",
    logo: TEAM_LOGOS["Las Rosas"],
    torneo: "Apertura 2026",
  },
  // Próximos — sin resultado
  {
    match_number: 13,
    rival: "Comunicaciones",
    date: "Dom 24 de Mayo",
    time: "18:45",
    stadium: "Albino Stadium",
    resultado: "",
    logo: TEAM_LOGOS["Comunicaciones"],
    torneo: "Apertura 2026",
  },
  {
    match_number: 14,
    rival: "Dínamo",
    date: "Dom 31 de Mayo",
    time: "11:45",
    stadium: "Albino Stadium",
    resultado: "3 - 2",
    logo: TEAM_LOGOS["Dínamo"],
    torneo: "Apertura 2026",
  },
  // Clausura 2026 — Fixture del club con fecha 1 a 15
  {
    match_number: 1,
    rival: "El Barrio",
    date: "Dom 06 de Septiembre",
    time: "10:00",
    stadium: "Albino Stadium",
    resultado: "3 - 1",
    logo: TEAM_LOGOS["El Barrio"],
    torneo: "Clausura 2026",
  },
  {
    match_number: 2,
    rival: "Vélez",
    date: "Dom 13 de Septiembre",
    time: "10:00",
    stadium: "Albino Stadium",
    resultado: "1 - 0",
    logo: TEAM_LOGOS["Vélez"],
    torneo: "Clausura 2026",
  },
  {
    match_number: 3,
    rival: "Sarmiento",
    date: "Dom 20 de Septiembre",
    time: "13:30",
    stadium: "Albino Stadium",
    resultado: "2 - 0",
    logo: TEAM_LOGOS["Sarmiento"],
    torneo: "Clausura 2026",
  },
  {
    match_number: 4,
    rival: "Belgrano",
    date: "Dom 27 de Septiembre",
    time: "13:30",
    stadium: "Albino Stadium",
    resultado: "",
    logo: TEAM_LOGOS["Belgrano"],
    torneo: "Clausura 2026",
  },
  {
    match_number: 5,
    rival: "Arenal",
    date: "Dom 04 de Octubre",
    time: "17:00",
    stadium: "Albino Stadium",
    resultado: "",
    logo: TEAM_LOGOS["Arenal"],
    torneo: "Clausura 2026",
  },
  {
    match_number: 6,
    rival: "Patagonia",
    date: "Dom 11 de Octubre",
    time: "18:45",
    stadium: "Albino Stadium",
    resultado: "",
    logo: TEAM_LOGOS["Patagonia"],
    torneo: "Clausura 2026",
  },
  {
    match_number: 7,
    rival: "Dinamo",
    date: "Dom 25 de Octubre",
    time: "18:45",
    stadium: "Albino Stadium",
    resultado: "",
    logo: TEAM_LOGOS["Dinamo"],
    torneo: "Clausura 2026",
  },
  {
    match_number: 8,
    rival: "Embajadores",
    date: "Dom 01 de Noviembre",
    time: "17:00",
    stadium: "Albino Stadium",
    resultado: "",
    logo: TEAM_LOGOS["Embajadores"],
    torneo: "Clausura 2026",
  },
  {
    match_number: 9,
    rival: "Comunicaciones",
    date: "Dom 08 de Noviembre",
    time: "15:15",
    stadium: "Albino Stadium",
    resultado: "",
    logo: TEAM_LOGOS["Comunicaciones"],
    torneo: "Clausura 2026",
  },
  {
    match_number: 10,
    rival: "Fecha libre",
    date: "Dom 15 de Noviembre",
    time: "Libre",
    stadium: "Albino Stadium",
    resultado: "",
    logo: CLUB_INFO.logo,
    torneo: "Clausura 2026",
  },
  {
    match_number: 11,
    rival: "Dinosaurios",
    date: "Dom 22 de Noviembre",
    time: "11:45",
    stadium: "Albino Stadium",
    resultado: "",
    logo: TEAM_LOGOS["Dinosaurios"],
    torneo: "Clausura 2026",
  },
  {
    match_number: 12,
    rival: "All Boys",
    date: "Dom 29 de Noviembre",
    time: "19:00",
    stadium: "Albino Stadium",
    resultado: "",
    logo: TEAM_LOGOS["All Boys"],
    torneo: "Clausura 2026",
  },
  {
    match_number: 13,
    rival: "Frontera",
    date: "Dom 06 de Diciembre",
    time: "21:30",
    stadium: "Albino Stadium",
    resultado: "",
    logo: TEAM_LOGOS["Frontera"],
    torneo: "Clausura 2026",
  },
  {
    match_number: 14,
    rival: "Las Rosas",
    date: "Dom 13 de Diciembre",
    time: "15:15",
    stadium: "Albino Stadium",
    resultado: "",
    logo: TEAM_LOGOS["Las Rosas"],
    torneo: "Clausura 2026",
  },
  {
    match_number: 15,
    rival: "Lácar",
    date: "Dom 20 de Diciembre",
    time: "21:30",
    stadium: "Albino Stadium",
    resultado: "",
    logo: TEAM_LOGOS["Lácar"],
    torneo: "Clausura 2026",
  },
];

// Cruces de los otros equipos en cada fecha (no incluye a Unión, que ya está en FIXTURE).
// Se puede cargar el resultado ("goles local - goles visitante") a mano acá, o mejor
// todavía, en la tabla "other_matches" de Supabase — ver computeStandings más abajo.
export const OTHER_MATCHES = [
  { torneo: "Clausura 2026", fecha: 1, home: "Las Rosas", away: "Lácar", date: "4/9/2026", time: "21:30", resultado: "1 - 0" },
  { torneo: "Clausura 2026", fecha: 1, home: "Dinamo", away: "Embajadores", date: "5/9/2026", time: "20:00", resultado: "0 - 1" },
  { torneo: "Clausura 2026", fecha: 1, home: "Patagonia", away: "Comunicaciones", date: "6/9/2026", time: "11:45", resultado: "2 - 1" },
  { torneo: "Clausura 2026", fecha: 1, home: "Frontera", away: "Vélez", date: "6/9/2026", time: "13:30", resultado: "2 - 0" },
  { torneo: "Clausura 2026", fecha: 1, home: "All Boys", away: "Chapelco", date: "6/9/2026", time: "15:15", resultado: "0 - 2" },
  { torneo: "Clausura 2026", fecha: 1, home: "Arenal", away: "Sarmiento", date: "6/9/2026", time: "17:00", resultado: "1 - 1" },
  { torneo: "Clausura 2026", fecha: 1, home: "Belgrano", away: "Dinosaurios", date: "6/9/2026", time: "18:45", resultado: "0 - 2" },

  { torneo: "Clausura 2026", fecha: 2, home: "Lácar", away: "El Barrio", date: "11/9/2026", time: "21:30", resultado: "1 - 0" },
  { torneo: "Clausura 2026", fecha: 2, home: "Dinamo", away: "Comunicaciones", date: "12/9/2026", time: "19:00", resultado: "0 - 3" },
  { torneo: "Clausura 2026", fecha: 2, home: "Patagonia", away: "Chapelco", date: "13/9/2026", time: "11:45", resultado: "0 - 3" },
  { torneo: "Clausura 2026", fecha: 2, home: "Frontera", away: "Sarmiento", date: "13/9/2026", time: "13:30", resultado: "3 - 0" },
  { torneo: "Clausura 2026", fecha: 2, home: "All Boys", away: "Dinosaurios", date: "13/9/2026", time: "15:15", resultado: "2 - 2" },
  { torneo: "Clausura 2026", fecha: 2, home: "Arenal", away: "Belgrano", date: "13/9/2026", time: "17:00", resultado: "2 - 0" },
  { torneo: "Clausura 2026", fecha: 2, home: "Las Rosas", away: "Embajadores", date: "13/9/2026", time: "18:45", resultado: "0 - 1" },

  { torneo: "Clausura 2026", fecha: 3, home: "Embajadores", away: "Comunicaciones", date: "18/9/2026", time: "21:30", resultado: "" },
  { torneo: "Clausura 2026", fecha: 3, home: "Las Rosas", away: "El Barrio", date: "19/9/2026", time: "19:00", resultado: "" },
  { torneo: "Clausura 2026", fecha: 3, home: "Lácar", away: "Vélez", date: "20/9/2026", time: "10:00", resultado: "" },
  { torneo: "Clausura 2026", fecha: 3, home: "Dinamo", away: "Chapelco", date: "20/9/2026", time: "11:45", resultado: "" },
  { torneo: "Clausura 2026", fecha: 3, home: "Patagonia", away: "Dinosaurios", date: "20/9/2026", time: "15:15", resultado: "" },
  { torneo: "Clausura 2026", fecha: 3, home: "Frontera", away: "Belgrano", date: "20/9/2026", time: "17:00", resultado: "" },
  { torneo: "Clausura 2026", fecha: 3, home: "All Boys", away: "Arenal", date: "20/9/2026", time: "18:45", resultado: "" },

  { torneo: "Clausura 2026", fecha: 4, home: "El Barrio", away: "Vélez", date: "25/9/2026", time: "21:30", resultado: "" },
  { torneo: "Clausura 2026", fecha: 4, home: "Embajadores", away: "Chapelco", date: "26/9/2026", time: "19:00", resultado: "" },
  { torneo: "Clausura 2026", fecha: 4, home: "Lácar", away: "Sarmiento", date: "27/9/2026", time: "10:00", resultado: "" },
  { torneo: "Clausura 2026", fecha: 4, home: "Dinamo", away: "Dinosaurios", date: "27/9/2026", time: "11:45", resultado: "" },
  { torneo: "Clausura 2026", fecha: 4, home: "Patagonia", away: "Arenal", date: "27/9/2026", time: "15:15", resultado: "" },
  { torneo: "Clausura 2026", fecha: 4, home: "Las Rosas", away: "Comunicaciones", date: "27/9/2026", time: "17:00", resultado: "" },
  { torneo: "Clausura 2026", fecha: 4, home: "Frontera", away: "All Boys", date: "27/9/2026", time: "18:45", resultado: "" },

  { torneo: "Clausura 2026", fecha: 5, home: "Comunicaciones", away: "Chapelco", date: "2/10/2026", time: "21:30", resultado: "" },
  { torneo: "Clausura 2026", fecha: 5, home: "El Barrio", away: "Sarmiento", date: "3/10/2026", time: "19:00", resultado: "" },
  { torneo: "Clausura 2026", fecha: 5, home: "Las Rosas", away: "Vélez", date: "4/10/2026", time: "10:00", resultado: "" },
  { torneo: "Clausura 2026", fecha: 5, home: "Embajadores", away: "Dinosaurios", date: "4/10/2026", time: "11:45", resultado: "" },
  { torneo: "Clausura 2026", fecha: 5, home: "Lácar", away: "Belgrano", date: "4/10/2026", time: "13:30", resultado: "" },
  { torneo: "Clausura 2026", fecha: 5, home: "Dinamo", away: "Arenal", date: "4/10/2026", time: "15:15", resultado: "" },
  { torneo: "Clausura 2026", fecha: 5, home: "Patagonia", away: "Frontera", date: "4/10/2026", time: "18:45", resultado: "" },

  { torneo: "Clausura 2026", fecha: 6, home: "Vélez", away: "Sarmiento", date: "9/10/2026", time: "21:30", resultado: "" },
  { torneo: "Clausura 2026", fecha: 6, home: "Comunicaciones", away: "Dinosaurios", date: "10/10/2026", time: "19:00", resultado: "" },
  { torneo: "Clausura 2026", fecha: 6, home: "El Barrio", away: "Belgrano", date: "11/10/2026", time: "10:00", resultado: "" },
  { torneo: "Clausura 2026", fecha: 6, home: "Embajadores", away: "Arenal", date: "11/10/2026", time: "11:45", resultado: "" },
  { torneo: "Clausura 2026", fecha: 6, home: "Lácar", away: "All Boys", date: "11/10/2026", time: "13:30", resultado: "" },
  { torneo: "Clausura 2026", fecha: 6, home: "Las Rosas", away: "Chapelco", date: "11/10/2026", time: "15:15", resultado: "" },
  { torneo: "Clausura 2026", fecha: 6, home: "Dinamo", away: "Frontera", date: "11/10/2026", time: "17:00", resultado: "" },

  { torneo: "Clausura 2026", fecha: 7, home: "Chapelco", away: "Dinosaurios", date: "23/10/2026", time: "21:30", resultado: "" },
  { torneo: "Clausura 2026", fecha: 7, home: "Vélez", away: "Belgrano", date: "24/10/2026", time: "19:00", resultado: "" },
  { torneo: "Clausura 2026", fecha: 7, home: "Comunicaciones", away: "Arenal", date: "25/10/2026", time: "10:00", resultado: "" },
  { torneo: "Clausura 2026", fecha: 7, home: "Las Rosas", away: "Sarmiento", date: "25/10/2026", time: "11:45", resultado: "" },
  { torneo: "Clausura 2026", fecha: 7, home: "El Barrio", away: "All Boys", date: "25/10/2026", time: "13:30", resultado: "" },
  { torneo: "Clausura 2026", fecha: 7, home: "Embajadores", away: "Frontera", date: "25/10/2026", time: "15:15", resultado: "" },
  { torneo: "Clausura 2026", fecha: 7, home: "Lácar", away: "Patagonia", date: "25/10/2026", time: "17:00", resultado: "" },

  { torneo: "Clausura 2026", fecha: 8, home: "Sarmiento", away: "Belgrano", date: "30/10/2026", time: "21:30", resultado: "" },
  { torneo: "Clausura 2026", fecha: 8, home: "Chapelco", away: "Arenal", date: "31/10/2026", time: "19:00", resultado: "" },
  { torneo: "Clausura 2026", fecha: 8, home: "Vélez", away: "All Boys", date: "1/11/2026", time: "10:00", resultado: "" },
  { torneo: "Clausura 2026", fecha: 8, home: "Comunicaciones", away: "Frontera", date: "1/11/2026", time: "11:45", resultado: "" },
  { torneo: "Clausura 2026", fecha: 8, home: "Las Rosas", away: "Dinosaurios", date: "1/11/2026", time: "13:30", resultado: "" },
  { torneo: "Clausura 2026", fecha: 8, home: "El Barrio", away: "Patagonia", date: "1/11/2026", time: "15:15", resultado: "" },
  { torneo: "Clausura 2026", fecha: 8, home: "Lácar", away: "Dinamo", date: "1/11/2026", time: "18:45", resultado: "" },

  { torneo: "Clausura 2026", fecha: 9, home: "Las Rosas", away: "Belgrano", date: "6/11/2026", time: "21:30", resultado: "" },
  { torneo: "Clausura 2026", fecha: 9, home: "Dinosaurios", away: "Arenal", date: "7/11/2026", time: "19:00", resultado: "" },
  { torneo: "Clausura 2026", fecha: 9, home: "Sarmiento", away: "All Boys", date: "8/11/2026", time: "10:00", resultado: "" },
  { torneo: "Clausura 2026", fecha: 9, home: "Chapelco", away: "Frontera", date: "8/11/2026", time: "11:45", resultado: "" },
  { torneo: "Clausura 2026", fecha: 9, home: "Vélez", away: "Patagonia", date: "8/11/2026", time: "13:30", resultado: "" },
  { torneo: "Clausura 2026", fecha: 9, home: "El Barrio", away: "Dinamo", date: "8/11/2026", time: "17:00", resultado: "" },
  { torneo: "Clausura 2026", fecha: 9, home: "Embajadores", away: "Lácar", date: "8/11/2026", time: "18:45", resultado: "" },

  // Fecha 10 adelantada por el viaje de varios equipos al torneo nacional.
  { torneo: "Clausura 2026", fecha: 10, home: "Las Rosas", away: "Arenal", date: "13/10/2026", time: "20:00", resultado: "" },
  { torneo: "Clausura 2026", fecha: 10, home: "Sarmiento", away: "Patagonia", date: "15/10/2026", time: "20:00", resultado: "" },
  { torneo: "Clausura 2026", fecha: 10, home: "Dinosaurios", away: "Frontera", date: "16/10/2026", time: "20:00", resultado: "" },
  { torneo: "Clausura 2026", fecha: 10, home: "Vélez", away: "Dinamo", date: "17/10/2026", time: "15:20", resultado: "" },
  { torneo: "Clausura 2026", fecha: 10, home: "Comunicaciones", away: "Lácar", date: "17/10/2026", time: "17:15", resultado: "" },
  { torneo: "Clausura 2026", fecha: 10, home: "El Barrio", away: "Embajadores", date: "17/10/2026", time: "19:00", resultado: "" },
  { torneo: "Clausura 2026", fecha: 10, home: "Belgrano", away: "All Boys", date: "19/10/2026", time: "20:00", resultado: "" },

  { torneo: "Clausura 2026", fecha: 11, home: "Arenal", away: "Frontera", date: "13/11/2026", time: "21:30", resultado: "" },
  { torneo: "Clausura 2026", fecha: 11, home: "Las Rosas", away: "All Boys", date: "14/11/2026", time: "19:00", resultado: "" },
  { torneo: "Clausura 2026", fecha: 11, home: "Belgrano", away: "Patagonia", date: "15/11/2026", time: "10:00", resultado: "" },
  { torneo: "Clausura 2026", fecha: 11, home: "Sarmiento", away: "Dinamo", date: "15/11/2026", time: "13:30", resultado: "" },
  { torneo: "Clausura 2026", fecha: 11, home: "Chapelco", away: "Lácar", date: "15/11/2026", time: "15:15", resultado: "" },
  { torneo: "Clausura 2026", fecha: 11, home: "Vélez", away: "Embajadores", date: "15/11/2026", time: "17:00", resultado: "" },
  { torneo: "Clausura 2026", fecha: 11, home: "Comunicaciones", away: "El Barrio", date: "15/11/2026", time: "18:45", resultado: "" },

  { torneo: "Clausura 2026", fecha: 12, home: "All Boys", away: "Patagonia", date: "20/11/2026", time: "21:30", resultado: "" },
  { torneo: "Clausura 2026", fecha: 12, home: "Belgrano", away: "Dinamo", date: "22/11/2026", time: "10:00", resultado: "" },
  { torneo: "Clausura 2026", fecha: 12, home: "Dinosaurios", away: "Lácar", date: "22/11/2026", time: "11:45", resultado: "" },
  { torneo: "Clausura 2026", fecha: 12, home: "Sarmiento", away: "Embajadores", date: "22/11/2026", time: "13:30", resultado: "" },
  { torneo: "Clausura 2026", fecha: 12, home: "Chapelco", away: "El Barrio", date: "22/11/2026", time: "15:15", resultado: "" },
  { torneo: "Clausura 2026", fecha: 12, home: "Las Rosas", away: "Frontera", date: "22/11/2026", time: "17:00", resultado: "" },
  { torneo: "Clausura 2026", fecha: 12, home: "Vélez", away: "Comunicaciones", date: "22/11/2026", time: "18:45", resultado: "" },

  { torneo: "Clausura 2026", fecha: 13, home: "All Boys", away: "Dinamo", date: "28/11/2026", time: "19:00", resultado: "" },
  { torneo: "Clausura 2026", fecha: 13, home: "Las Rosas", away: "Patagonia", date: "29/11/2026", time: "10:00", resultado: "" },
  { torneo: "Clausura 2026", fecha: 13, home: "Arenal", away: "Lácar", date: "29/11/2026", time: "11:45", resultado: "" },
  { torneo: "Clausura 2026", fecha: 13, home: "Belgrano", away: "Embajadores", date: "29/11/2026", time: "13:30", resultado: "" },
  { torneo: "Clausura 2026", fecha: 13, home: "Dinosaurios", away: "El Barrio", date: "29/11/2026", time: "15:15", resultado: "" },
  { torneo: "Clausura 2026", fecha: 13, home: "Sarmiento", away: "Comunicaciones", date: "29/11/2026", time: "17:00", resultado: "" },
  { torneo: "Clausura 2026", fecha: 13, home: "Chapelco", away: "Vélez", date: "29/11/2026", time: "18:45", resultado: "" },

  { torneo: "Clausura 2026", fecha: 14, home: "Patagonia", away: "Dinamo", date: "4/12/2026", time: "21:30", resultado: "" },
  { torneo: "Clausura 2026", fecha: 14, home: "Frontera", away: "Lácar", date: "5/12/2026", time: "19:00", resultado: "" },
  { torneo: "Clausura 2026", fecha: 14, home: "All Boys", away: "Embajadores", date: "6/12/2026", time: "10:00", resultado: "" },
  { torneo: "Clausura 2026", fecha: 14, home: "Arenal", away: "El Barrio", date: "6/12/2026", time: "11:45", resultado: "" },
  { torneo: "Clausura 2026", fecha: 14, home: "Belgrano", away: "Comunicaciones", date: "6/12/2026", time: "13:30", resultado: "" },
  { torneo: "Clausura 2026", fecha: 14, home: "Dinosaurios", away: "Vélez", date: "6/12/2026", time: "17:00", resultado: "" },
  { torneo: "Clausura 2026", fecha: 14, home: "Sarmiento", away: "Chapelco", date: "6/12/2026", time: "18:45", resultado: "" },

  { torneo: "Clausura 2026", fecha: 15, home: "Patagonia", away: "Embajadores", date: "12/12/2026", time: "19:00", resultado: "" },
  { torneo: "Clausura 2026", fecha: 15, home: "Frontera", away: "El Barrio", date: "13/12/2026", time: "10:00", resultado: "" },
  { torneo: "Clausura 2026", fecha: 15, home: "Las Rosas", away: "Dinamo", date: "13/12/2026", time: "11:45", resultado: "" },
  { torneo: "Clausura 2026", fecha: 15, home: "All Boys", away: "Comunicaciones", date: "13/12/2026", time: "13:30", resultado: "" },
  { torneo: "Clausura 2026", fecha: 15, home: "Arenal", away: "Vélez", date: "13/12/2026", time: "15:15", resultado: "" },
  { torneo: "Clausura 2026", fecha: 15, home: "Belgrano", away: "Chapelco", date: "13/12/2026", time: "17:00", resultado: "" },
  { torneo: "Clausura 2026", fecha: 15, home: "Dinosaurios", away: "Sarmiento", date: "13/12/2026", time: "18:45", resultado: "" },
];

export const NEWS = [
  {
    category: "Fecha 3",
    title: "Unión se llevó la victoria ante Sarmiento por 2-0 con goles de Fabio y Daro y sigue sumando para seguir en lo más alto.",
    image: "/UnionPlantel-18.png"
  },
  {
    category: "Entrenamiento",
    title: "Entrenamientos todos los martes de 21hs a 23hs.",
    location: "Cancha Chango Soria",
    image: "/Entrenamiento.png"
  },
];

export const SOCIAL_EVENT = {
  title: "",
  time: "",
  description: ""
};

export const MATCH_VIDEOS = [
  "1.mp4",
  "2.mp4",
  "3.mp4",
  "1º FECHA Clau26 (4).mp4",
  "2º FECHA Clau26 (1).mp4",
  "2º FECHA Clau26 (2).mp4",
  "2º FECHA Clau26 (3).mp4",
  "2º FECHA Clau26 (4).mp4",
  "2º FECHA Clau26 (5).mp4",
  "2º FECHA Clau26 (6).mp4",
  "2º FECHA Clau26 (7).mp4",
  "2º FECHA Clau26 (8).mp4",
  "2º FECHA Clau26 (9).mp4",
  "2º FECHA Clau26 (10).mp4",
  "3º FECHA Clau26 (1).mp4",
  "3º FECHA Clau26 (2).mp4",
];

// Agregar fotos nuevas al final del array (la galería las muestra con las más recientes primero)
export const MATCH_IMAGES = [
  "UnionPlantel.png",
  "UnionPlantel-1.png",
  "UnionPlantel-2.png",
  "UnionPlantel-3.png",
  "UnionPlantel-4.png",
  "UnionPlantel-5.png",
  "UnionPlantel-6.png",
  "UnionPlantel-7.png",
  "UnionPlantel-8.png",
  "UnionPlantel-9.png",
  "UnionPlantel-10.png",
  "UnionPlantel-11.png",
  "UnionPlantel-12.png",
  "UnionPlantel-13.png",
  "UnionPlantel-14.png",
  "UnionPlantel-15.png",
  "1º FECHA CLAU26.png.jpeg",
  "1º FECHA CLAU26(2).jpeg",
  "1º FECHA CLAU26(3).jpeg",
  "1º FECHA CLAU26(5).jpeg",
  "1º FECHA CLAU26(6).jpeg",
  "1º FECHA CLAU26(7).jpeg",
  "1º FECHA CLAU26(8).jpeg",
  "1º FECHA CLAU26(9).jpeg",
  "Entrenamiento1.png",
  "UnionPlantel-16.png",
  "UnionPlantel-17.png",
  "UnionPlantel-18.png",
  "UnionPlantel-19.png",
  "UnionPlantel-20.png",
  "UnionPlantel-21.png",
  "UnionPlantel-22.png",
  "UnionPlantel-23.png",
  "UnionPlantel-24.png",
  "UnionPlantel-25.png",
  "UnionPlantel-26.png",
  "UnionPlantel-27.png",
  "UnionPlantel-28.png",
  "UnionPlantel-29.png",
  "UnionPlantel-30.png",
  "UnionPlantel-31.png",
  "UnionPlantel-32.png",
  "UnionPlantel-33.png",
  "UnionPlantel-34.png",
  "UnionPlantel-35.png",
];
