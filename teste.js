var outro = {
    name: 'kubernetes',
    createdAt: '2014-06-06T22:56:04Z',
    updatedAt: '2022-08-17T23:36:13Z',
    pullRequests: { totalCount: 52215 },
    releases: { totalCount: 549 },
    primaryLanguage: { name: 'Go' },
    issuesclosed: { totalCount: 39727 },
    issuesopen: { totalCount: 1667 }
  }
  const outro2 = {}
  const x = Object.keys(outro).map(key => {
    if(typeof outro[key] === 'object') {
        const chave = Object.keys(outro[key])[0]
        outro2[key] = outro[key][chave]
    } else {
        outro2[key] = outro[key]
    }

  })
  console.log(outro2)