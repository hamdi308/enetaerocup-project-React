import palneuresp1 from "../images/Melekjarraya.jpg";
import palneuresp2 from "../images/raniallouche.jpg";
import poluclubresp1 from "../images/WafaBenAbdelaziz.jpg";
import polyclubresp2 from "../images/rahmallouche.jpg";
import droneresp1 from "../images/ademfarjallah.jpg";
import droneresp2 from "../images/mariembensalah.jpg";
import Pdf1 from '../documents/planeur.pdf';
import Pdf2 from '../documents/polyclub.pdf';
import Pdf3 from '../documents/drone.pdf';

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topline: 'competition',
    headLine: 'PLANEUR',
    description: 'C\'est la base du domaine d\'aeromodelisme dont les participants  construissent leurs propres modèles de planeur en respectant le cahier des charges publié. Cette compétition est un défi pour bien manipuler les notions de bases de ce domaine en présentant correctement le dossier technique du modéle et réaliser les testes de vols demandées.',
    buttonLabel: 'Get started',
    imgStart: false,
    alt: 'plane',
    dark: true,
    primary: true,
    darkText: false,
    respimg1:palneuresp1,
    respimg2: palneuresp2,
    resp1Nom: 'Melek Jarraya',
    resp1Contact: '52470095',
    resp2Nom: 'Rania Allouch',
    resp2Contact: '50545025',
    Pdf: Pdf1,
    form:'https://docs.google.com/forms/d/1wk3zItbjQyB_tTX1fDfgrvomnDRjFM8RZO7WcZYlvIE/viewform?fbclid=IwAR2hV5XzV0j3RI0qQsJSE6pAzuyTzx2-Lq2cj2SiMwt2lH_NemAFnWwVMQ8&edit_requested=true'

};

export const homeObjTwo = {
    id: 'info',
    backgroundColor:'#000000',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topline: 'COMPETITION',
    headLine: 'POLYCLUB',
    description: 'C\'est le fruit du domaine d\'aeromodelisme , en effet les participants pilotent leurs modèles radiocommandées touten respectant la figure du circuit du cahier des charges publié. cette compétition identifie l\'intelligence du pilote à surmonter les conditions meteorologiques et les figures du circuit.',
    buttonLabel: 'Get More',
    imgStart: false,
    alt: 'plane2',
    dark: true,
    primary: true,
    darkText: false,
    respimg1:poluclubresp1,
    respimg2:polyclubresp2,
    resp1Nom: 'Wafa Ben Abdelaziz',
    resp1Contact: '54888601',
    resp2Nom: 'Rahma Allouche',
    resp2Contact: '52545566',
    Pdf: Pdf2,
    form:'https://docs.google.com/forms/d/1jNta7lUxSiSvKbAbXMANOErl3-KWGBwnWohdXY6mY_w/viewform?fbclid=IwAR1J1_I15BAVtQO5OZaQDBlsqrjjZoYYCG6nKifYagunwIaPmS9nB2i4BHQ&edit_requested=true'

};

export const homeObjThree = {
    id: 'info',
    backgroundColor:'#000000',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topline: 'COMPETITION',
    headLine: 'DRONE',
    description: 'C\'est le spectacle favoris des passionnées du ce domaine dont les participants pilotent leurs quadricoptéres tout en respectant les missions du circuits du cahier des charges publié. Une ambiance folle mixer de beaucoup du suspence vous attendent !',
    buttonLabel: 'Get More',
    imgStart: false,
    alt: 'plane2',
    dark: true,
    primary: true,
    darkText: false,
    respimg1: droneresp1,
    resp1Nom: 'Adem Farjallah',
    resp1Contact: '53417707',
    respimg2: droneresp2,
    resp2Nom: 'Mariem Ben Salah',
    resp2Contact: '46583892',
    Pdf: Pdf3,
    form:'https://docs.google.com/forms/d/1frBI9FFuOWcwWCp4Gs0vFQ-dU02p_M5g3j6wA58D34A/viewform?fbclid=IwAR2wlDUzQ34V9zNokI6FZrUx5dfubPEwcVvQEAfIZ_nsNKVOIZmD2amf-MA&edit_requested=true'

};