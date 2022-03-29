const { TeamMember } = require('../backend/data/model');

/* WARNING THIS WILL DROP THE CURRENT DATABASE */
seed();

async function seed() {
    // create table
    await TeamMember.sync({ force: true });
    // insert data
    await Promise.all([
        TeamMember.create({
            firstName: 'Brock',
            lastName: 'Jones',
            title: 'CEO',
            photoUrl: '/img/brock.jpeg',
            favoriteColor: '#4682B4',
            story: 'Technology and brand building executive with experience ranging from launching multi-million dollar startups to helping build the world\'s largest brands',
        }),
        TeamMember.create({
            firstName: 'Autumn',
            lastName: 'Schultz',
            title: 'CPO',
            photoUrl: '/img/autumn.jpeg',
            favoriteColor: '#84BD00',
            story: 'An experienced product + design leader with a history of bringing ideas to life and building teams within the e-commerce space',
        }),
        TeamMember.create({
            firstName: 'Zach',
            lastName: 'Wagner',
            title: 'Director of Engineering',
            favoriteColor: '#6F2DBD',
            photoUrl: '/img/zach.jpeg',
            story: 'Experienced software engineering leader with a history of delivering high impact projects',
        }),
        TeamMember.create({
            firstName: 'Emily',
            lastName: 'Wasserman',
            title: 'Director of Growth',
            favoriteColor: '#D8BFD8',
            photoUrl: '/img/emily.jpeg',
            story: 'Innovative product marketing and operations lead with experience working for world renowned consumer brands on digital acumen, as well as high growth consumer tech startups and platforms',
        }),
    ]);
}
