import l_img1_1 from './l_img1_1.png'
import l_img1_2 from './l_img1_2.png'
import l_img1_3 from './l_img1_3.png'
import l_img1_4 from './l_img1_4.png'
import bin_icon from './bin_icon.png'
import l_img2 from './l_img2.png'
import l_img3 from './l_img3.png'
import l_img4 from './l_img4.png'
import l_img5 from './l_img5.png'
import l_img6 from './l_img6.png'
import l_img7 from './l_img7.png'
import l_img8 from './l_img8.png'
import l_img9 from './l_img9.png'
import l_img10 from './l_img10.png'
import bin_icon from './bin_icon.png'
import cart_icon from './cart_icon.png'
import cross_icon from './cross_icon.png'
import logo from './logo.png'
import search_icon from './search_icon.png'
import customer_support_icon from './customer_support.png'
import exchange_icon from './exchange.png'
import shipping_icon from './Shipping.png'
import dropdown_icon from './dropdown_icon.png'
import freshfashion_icon from './freshfashion.png'
import paypal_icon from './paypal_icon.png'
import cards_icon from './Credit_or_Debitcard.png'
import applepay_icon from './applepay.png'
import aboutus_img from './aboutus.png'
import contactus_img from './contactus_img.png'

export const assets = {
    logo,
    bin_icon,
    cart_icon,
    cross_icon,
    search_icon,
    customer_support_icon,
    exchange_icon,
    shipping_icon,
    dropdown_icon,
    freshfashion_icon,
    paypal_icon,
    cards_icon,
    applepay_icon,
    aboutus_img,
    contactus_img
}

export const products = [
    {
        _id: "WEST0111",
        name: "Olive Tiered Shirt Dress with Belt",
        description: "This olive tiered shirtdress is adorned with botanical motifs, woven from a soft blend fabric. It includes a collared neck extending to a buttoned placket and is completed with a detachable belt for a cinched fit.",
        price: 30,
        image: [l_img1_1, l_img1_2, l_img1_3, l_img1_4],
        category: "Women",
        subCategory: "Dresses",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false
    },
    {
        _id: "WEST0121",
        name: "Khaki Knot-Design Shirt",
        description: "This khaki shirt features a styling knot design. Made with soft and breathable fabric, it includes a notched collar, button down front and full sleeves.",
        price: 15,
        image: [l_img2],
        category: "Women",
        subCategory: "Shirts",
        sizes: ["M", "L", "XL"],
        bestseller: true
    },
    {
        _id: "WEST0122",
        name: "Wardrobe Brown Top",
        description: "This brown top features a sophisticated notched collar and puff sleeves. It offers great breathability and comfort with its cotton-rich build.",
        price: 15,
        image: [l_img3],
        category: "Women",
        subCategory: "Shirts",
        sizes: ["S", "M", "L"],
        bestseller: false
    },
    {
        _id: "WEST0131",
        name: "Rust Printed Cotton T shirt",
        description: "This rust t-shirt is designed with a stylish printed addition. The pure cotton garment carries a round neck and half sleeves.",
        price: 8,
        image: [l_img4],
        category: "Women",
        subCategory: "TShirts",
        sizes: ["XS", "S", "M", "L"],
        bestseller: false
    },
    {
        _id: "WEST0211",
        name: "Casuals Olive Checkered Relaxed-Fit Cotton Shirt",
        description: "This olive green checkered shirt features a classic button-down collar and chest pocket for effortless style. Crafted from soft fabric, its relaxed handle ensures all-day comfort and versatility.",
        price: 18,
        image: [l_img5],
        category: "Men",
        subCategory: "Shirts",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false
    },
    {
        _id: "WEST0212",
        name: "Casuals Olive Checks Design Relaxed-Fit Cotton Shirt",
        description: "This olive and white checked shirt a button-down front and a classic chest pocket. Designed in a relaxed fit, it offers a blend of style and comfort for everyday wear.",
        price: 16,
        image: [l_img6],
        category: "Men",
        subCategory: "Shirts",
        sizes: ["S", "M", "XL"],
        bestseller: false
    },
    {
        _id: "WEST0213",
        name: "Casuals Navy Checks Print Relaxed-Fit Cotton Shirt",
        description: "This navy and white checked shirt features a button-down front and a classic chest pocket. Designed in a relaxed fit, it ensures style and comfort for everyday wear.",
        price: 20,
        image: [l_img7],
        category: "Men",
        subCategory: "Shirts",
        sizes: ["S", "M", "L", "XL"],
        bestseller: true
    },
    {
        _id: "WEST0311",
        name: "Beige Bow Design Mesh A-Line Dress",
        description: "This beige dress features a self-striped bodice. The quality fabric partywear offers an A-line silhouette adorned with layered mesh frills. It carries a round neck, sleeveless cut, bow and knot-detailing",
        price: 25,
        image: [l_img8],
        category: "Girls",
        subCategory: "Frocks",
        sizes: ["XS", "S", "M", "L"],
        bestseller: false
    },
    {
        _id: "WEST0312",
        name: " Red Lace Embroidered A-Line Dress",
        description: " This red dress adorned with intricate lace embroidery and a front bow design.The dress is completed with a round neck, sleeveless and knot detailing in the back.",
        price: 20,
        image: [l_img9],
        category: "Girls",
        subCategory: "Frocks",
        sizes: ["XS", "S", "M", "L"],
        bestseller: true
    },
    {
        _id: "WEST0411",
        name: "White Embroidered Cotton Polo T-Shirt",
        description: "This white polo t-shirt is designed with playful embroidery. Made in a cotton-rich blend, the regular-fit garment offers a polo collar leading to a three button placket and short sleeves.",
        price: 15,
        image: [l_img10],
        category: "Boys",
        subCategory: "TShirts",
        sizes: ["XS", "S", "M", "L"],
        bestseller: true
    }
]