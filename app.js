const awards = [
    {
      name: 'James Peebles',
      category: 'Physics',
      research: 'Theoretical discoveries in physical cosmology',
      year: 2019,
    },
    {
      name: 'Michel Mayor',
      category: 'Physics',
      research: 'Discovery of an exoplanet orbiting a solar-type star',
      year: 2019,
    },
    {
      name: 'Didier Queloz',
      category: 'Physics',
      research: 'Discovery of an exoplanet orbiting a solar-type star',
      year: 2019,
    },
    {
      name: 'John B. Goodenough',
      category: 'Chemistry',
      research: 'Development of lithium-ion batteries',
      year: 2019,
    },
    {
      name: 'M. Stanley Whittingham',
      category: 'Chemistry',
      research: 'Development of lithium-ion batteries',
      year: 2019,
    },
    {
      name: 'Akira Yoshino',
      category: 'Chemistry',
      research: 'Development of lithium-ion batteries',
      year: 2019,
    },
    {
      name: 'Arthur Ashkin',
      category: 'Physics',
      research: 'Optical tweezers and their application to biological systems',
      year: 2018,
    },
    {
      name: 'Gerard Mourou',
      category: 'Physics',
      research: 'Method of generating high-intensity, ultra-short optical pulses',
      year: 2018,
    },
    {
      name: 'Donna Strickland',
      category: 'Physics',
      research: 'Method of generating high-intensity, ultra-short optical pulses',
      year: 2018,
    },
    {
      name: 'Frances H. Arnold',
      category: 'Chemistry',
      research: 'Directed evolution of enzymes',
      year: 2018,
    },
    {
      name: 'George P. Smith',
      category: 'Chemistry',
      research: 'Phage display of peptides and antibodies.',
      year: 2018,
    },
    {
      name: 'Sir Gregory P. Winter',
      category: 'Chemistry',
      research: 'Phage display of peptides and antibodies.',
      year: 2018,
    },
  ];
 function getPrizes(awards){
    var prizes=[];
     awards.map(award=>{
         if(!prizes.find(prize=>prize.year===award.year && prize.category===award.category)){
            var winers=[];
            var awd = awards.filter(ad=>{
                if(ad.year==award.year && ad.category===award.category){
                    return {name:ad.name, research:ad.research}
                }
            })
            var research=[];
            awards.map(ad=>{
                if(research.indexOf(ad.research)==-1 && ad.year==award.year && ad.category==award.category){
                    research.push(ad)
                }
            })
            var winers= awd.map((a)=>{
                var sh = awd.filter((aw)=>aw.research==a.research)
                if(sh.length==2){

                }
                return {name:a.name, share: 1/(sh.length * research.length)}
            })
            prizes.push({
                category:award.category,
                year:award.year,
                winners:winers
            })
        }
    })
    return prizes;
}

getPrizes(awards)