import P_1 from './P_1.png'
import P_2 from './P_2.png'
import P_3 from './P_3.png'
import P_4 from './P_4.png'
import P_5 from './P_5.png'
import P_6 from './P_6.png'
import P_7 from './P_7.png'
import P_8 from './P_8.png'
import P_9 from './P_9.png'
import P_10 from './P_10.png'
import P_11 from './P_11.png'
import P_12 from './P_12.png'
import P_13 from './P_13.png'
import P_14 from './P_14.png'
import P_15 from './P_15.png'
import P_16 from './P_16.png'
import P_17 from './P_17.png'
import P_18 from './P_18.png'
import P_19 from './P_19.png'
import P_20 from './P_20.png'
import P_21 from './P_21.png'
import P_22 from './P_22.png'
import P_23 from './P_23.png'
import P_24 from './P_24.png'
import P_25 from './P_25.png'



import logo from './logo.png'
import hero_img from './hero_img.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.png'
import contact_img from './contact_img.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'

export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon
}

// ... existing imports ...

export const products = [
    {
        id: "aaaaa",
        name: "Paracetamol",
        description: "A common pain reliever and fever reducer.",
        price: 50,
        image: [P_1],
        category: "Medicine",
        subCategory: "Pain Relief",
        dose: ["500mg", "1000mg", "1500mg"],
        date: 1716634345448,
        bestseller: true
    },
    {
        id: "aaaab",
        name: "Ibuprofen",
        description: "A nonsteroidal anti-inflammatory drug (NSAID) used to reduce pain and inflammation.",
        price: 60,
        image: [P_2],
        category: "Medicine",
        subCategory: "Pain Relief",
        dose: ["200mg", "400mg", "600mg"],
        date: 1716634345449,
        bestseller: false
    },
    {
        id: "aaaac",
        name: "Aspirin",
        description: "A pain reliever and blood thinner.",
        price: 45,
        image: [P_3],
        category: "Medicine",
        subCategory: "Pain Relief",
        dose: ["81mg", "325mg", "500mg"],
        date: 1716634345450,
        bestseller: true
    },
    {
        id: "aaaad",
        name: "Amoxicillin",
        description: "An antibiotic used to treat bacterial infections.",
        price: 80,
        image: [P_4],
        category: "Medicine",
        subCategory: "Antibiotics",
        dose: ["250mg", "500mg", "875mg"],
        date: 1716634345451,
        bestseller: false
    },
    {
        id: "aaaae",
        name: "Glimpride",
        description: "An oral medication used to treat type 2 diabetes.",
        price: 70,
        image: [P_5],
        category: "Medicine",
        subCategory: "Diabetes",
        dose: ["1mg", "2mg", "4mg"],
        date: 1716634345452,
        bestseller: true
    },
    {
        id: "aaaaf",
        name: "Cetrizine",
        description: "An antihistamine used to relieve allergy symptoms.",
        price: 55,
        image: [P_6],
        category: "Medicine",
        subCategory: "Allergy Relief",
        dose: ["5mg", "10mg"],
        date: 1716634345453,
        bestseller: false
    },
    {
        id: "aaaag",
        name: "Loratadine",
        description: "A non-drowsy antihistamine for allergy relief.",
        price: 65,
        image: [P_7],
        category: "Medicine",
        subCategory: "Allergy Relief",
        dose: ["10mg"],
        date: 1716634345454,
        bestseller: true
    },
    {
        id: "aaaah",
        name: "Azithromycin",
        description: "An antibiotic used to treat various bacterial infections.",
        price: 90,
        image: [P_8],
        category: "Medicine",
        subCategory: "Antibiotics",
        dose: ["250mg", "500mg"],
        date: 1716634345455,
        bestseller: false
    },
    {
        id: "aaaai",
        name: "Amlodipine",
        description: "A medication used to treat high blood pressure and chest pain.",
        price: 75,
        image: [P_9],
        category: "Medicine",
        subCategory: "Cardiovascular",
        dose: ["2.5mg", "5mg", "10mg"],
        date: 1716634345456,
        bestseller: true
    },
    {
        id: "aaaaj",
        name: "Pantoprazole",
        description: "A proton pump inhibitor used to reduce stomach acid.",
        price: 85,
        image: [P_10],
        category: "Medicine",
        subCategory: "Gastrointestinal",
        dose: ["20mg", "40mg"],
        date: 1716634345457,
        bestseller: false
    },
    {
        id: "aaaak",
        name: "Baby Rub",
        description: "A gentle, soothing rub for babies.",
        price: 40,  
        image: [P_11],
        category: "Baby Care & women",
        subCategory: "Skin Care",
        dose: ["50g", "100g"],
        date: 1716634345458,
        bestseller: true
    },
    {
        id: "aaaal",
        name: "Johnson Baby Shampoo",
        description: "A mild, tear-free shampoo for babies.",
        price: 35,
        image: [P_12],
        category: "Baby Care & women care",
        subCategory: "Bath",
        dose: ["200ml", "500ml"],
        date: 1716634345459,
        bestseller: true
    },
    {
        id: "aaaam",
        name: "Baby Soap",
        description: "A gentle soap for baby's delicate skin.",
        price: 25,
        image: [P_13],
        category: "Baby Care & women care",
        subCategory: "Bath",
        dose: ["75g", "125g"],
        date: 1716634345460,
        bestseller: false
    },
    {
        id: "aaaan",
        name: "Pampers",
        description: "Disposable diapers for babies.",
        price: 95,
        image: [P_14],
        category: "Baby Care & women care",
        subCategory: "Diapers",
        dose: ["Small", "Medium", "Large"],
        date: 1716634345461,
        bestseller: true
    },
    {
        id: "aaaao",
        name: "Baby Wipes",
        description: "Soft, moist wipes for baby care.",
        price: 30,
        image: [P_15],
        category: "Baby Care & women care",
        subCategory: "Hygiene",
        dose: ["72 wipes", "144 wipes"],
        date: 1716634345462,
        bestseller: false
    },
    {
        id: "aaaap",
        name: "Stay Free",
        description: "Sanitary pads for women.",
        price: 55,
        image: [P_16],
        category: "Baby Care & women care",
        subCategory: "Feminine Hygiene",
        dose: ["Regular", "Heavy Flow"],
        date: 1716634345463,
        bestseller: true
    },
    {
        id: "aaaaq",
        name: "Nivea Eye Liner",
        description: "Long-lasting, smudge-proof eye liner.",
        price: 45,
        image: [P_17],
        category: "Baby Care & women care",
        subCategory: "Makeup",
        dose: ["Black", "Brown"],
        date: 1716634345464,
        bestseller: false
    },
    {
        id: "aaaar",
        name: "Fairdew Fairness Cream",
        description: "Skin lightening and brightening cream.",
        price: 70,
        image: [P_18],
        category: "Baby Care & women care",
        subCategory: "Skin Care",
        dose: ["50g", "100g"],
        date: 1716634345465,
        bestseller: true
    },
    {
        id: "aaaas",
        name: "Head and Shoulders",
        description: "Anti-dandruff shampoo for healthy scalp.",
        price: 65,
        image: [P_19],
        category: "Baby Care & women care",
        subCategory: "Hair Care",
        dose: ["200ml", "400ml"],
        date: 1716634345466,
        bestseller: true
    },
    {
        id: "aaaat",
        name: "Enshine Hair Oil",
        description: "Nourishing oil for strong and shiny hair.",
        price: 40,
        image: [P_20],
        category: "Baby Care & women care",
        subCategory: "Hair Care",
        dose: ["100ml", "200ml"],
        date: 1716634345467,
        bestseller: false
    },
    {
        id: "aaaau",
        name: "Phillips Electric Shaver",
        description: "Rechargeable electric shaver for men.",
        price: 150,
        image: [P_21],
        category: "Men's care",
        subCategory: "Grooming",
        dose: ["3 Blade", "5 Blade"],
        date: 1716634345468,
        bestseller: true
    },
    {
        id: "aaaav",
        name: "Macho Men Cream",
        description: "Body cream for men with a masculine scent.",
        price: 55,
        image: [P_22],
        category: "Men's care",
        subCategory: "Skin Care",
        dose: ["100g", "200g"],
        date: 1716634345469,
        bestseller: false
    },
    {
        id: "aaaaw",
        name: "Man Matters Hair Serum",
        description: "Hair growth serum for men.",
        price: 80,
        image: [P_23],
        category: "Men's care",
        subCategory: "Hair Care",
        dose: ["30ml", "60ml"],
        date: 1716634345470,
        bestseller: true
    },
    {
        id: "aaaax",
        name: "Loreal Men Serum",
        description: "Anti-aging serum for men's skin.",
        price: 90,
        image: [P_24],
        category: "Men's care",
        subCategory: "Skin Care",
        dose: ["30ml", "50ml"],
        date: 1716634345471,
        bestseller: false
    },
    {
        id: "aaaay",
        name: "Mrs Glow Serum",
        description: "A facial serum for glowing skin.",
        price: 120,
        image: [P_25],
        category: "Men's care",
        subCategory: "Skin Care",
        dose: ["15ml", "30ml", "50ml"],
        date: 1716634345472,
        bestseller: true
    }
]