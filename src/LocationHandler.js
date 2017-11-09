
const venues = {
  ffur: 'Furuset',
  fbib: 'Biblo',
  fmaj: 'Majorstuen',
  fbje: 'Bjerke',
  fnor: 'Nordtvedt',
  from: 'Romsås',
  froa: 'Røa',
  flam: 'Lambertseter',
  ftor: 'Torshov',
  frmm: 'Rommen',
  fopp: 'Oppsal',
  fbol: 'Bøler',
  fsme: 'Smestad',
  hutl: 'Hovedutlånet',
  fnyd: 'Nydalen',
  fgry: 'Grünerløkka',
  fsto: 'Stovner',
  fhol: 'Holmlia',
  fgam: 'Tøyen'
}

const datetimeOptions = { weekday: 'short', year: 'numeric', month: 'short',
  day: 'numeric', hour: '2-digit', minute: '2-digit' };


function extractDateTime(seconds) {
    let date = new Date(0);
    date.setSeconds(seconds);
    return date.toLocaleDateString("nb-no", datetimeOptions);
}

function extractDevice(locationString) {
  const strings = locationString.split('.')

  const venue = venues[strings[0]] || 'Ukjent ' + strings[0]
  let handledBy = 'unknown'
  let icon = 'fa-question'

  if (strings[1].startsWith('rfidhub')) {
    handledBy = 'operator'
    icon = 'fa-female'
  } else if (strings[1].startsWith('tagvision')) {
    handledBy = 'automat'
    icon = 'fa-barcode'
  } else if(strings[1].startsWith('bibliotheca')) {
    handledBy = 'bibliotheca'
    icon = 'fa-barcode'
  }

  return {
    venue: venue,
    handledBy: handledBy,
    icon: icon
  }
}

function extractType(typeString) {
  let icon = 'fa-question'

  switch(typeString) {
    case 'MsgReqCheckin':
      icon = 'fa-long-arrow-right'
      break
    case 'MsgReqCheckout':
      icon = 'fa-long-arrow-left'
      break
    case 'Info':
      icon = 'fa-info-circle'
      break
  }

  return icon
}

export function translate(entry) {
  const dev = extractDevice(entry.last_dev)
  const timestamp = {ts: extractDateTime(entry.last_at)}

  return Object.assign({}, timestamp, dev)
}


export function translateHistory(entries) {
  const rows = []
  entries.forEach((entry) => {
    rows.push({dev: extractDevice(entry.dev), ts: extractDateTime(entry.at), type: extractType(entry.type)})
  })

  return rows
}
