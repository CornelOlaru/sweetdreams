
let AllProductsList = [
  {
    id: "1",
    name: "Delicious Chocolate Cake",
    price: "$25.00",
    shortDescription: "A rich and moist chocolate cake.",
    description:
      "This chocolate cake is made with the finest cocoa, providing a deep and satisfying flavor. Perfect for any occasion, it is sure to delight chocolate lovers.",
    image: "https://cakebycourtney.com/wp-content/uploads/2021/08/IMG_8989.jpg",
    category: "Cakes",
  },
  {
    id: "2",
    name: "Vanilla Cream Cake",
    price: "$20.00",
    shortDescription: "A light and fluffy vanilla cake.",
    description:
      "Our vanilla cream cake is filled with smooth and creamy vanilla custard, providing a perfect treat for any time of day.",
    image: "https://cdn.wishingcart.in/wp-content/uploads/2021/04/vanilla-cake-IMG_3873-scaled.jpg",
    category: "Cakes",
  },
  {
    id: "3",
    name: "Strawberry Shortcake",
    price: "$22.00",
    shortDescription: "A classic strawberry shortcake.",
    description:
      "Layers of fluffy sponge cake, fresh strawberries, and whipped cream make this strawberry shortcake a timeless favorite.",
    image: "https://images.ricardocuisine.com/services/recipes/5714.jpg",
    category: "Cakes",
  },
  {
    id: "4",
    name: "Red Velvet Cake",
    price: "$24.00",
    shortDescription: "A moist and delicious red velvet cake.",
    description:
      "Our red velvet cake is known for its soft, velvety texture and its signature red color. Topped with a tangy cream cheese frosting.",
    image: "https://www.bhg.com/thmb/PANPg7iyPQmpeeXV5rGWhIwBn1Y=/1244x0/filters:no_upscale():strip_icc()/red-velvet-cake-R161883-4961fbef19e84c78818d0ae4d5f56d0e.jpg",
    category: "Cakes",
  },
  {
    id: "5",
    name: "Lemon Drizzle Cake",
    price: "$18.00",
    shortDescription: "A zesty lemon cake with a drizzle.",
    description:
      "This lemon drizzle cake is made with fresh lemon juice and zest, providing a tangy and refreshing flavor.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjDD8BZBJvFVDiDVMY8TDI4OD_kdbAQO_GqA&s",
    category: "Cakes",
  },
  {
    id: "6",
    name: "Carrot Cake",
    price: "$20.00",
    shortDescription: "A moist and flavorful carrot cake.",
    description:
      "Our carrot cake is made with fresh carrots, walnuts, and a blend of warm spices, topped with a creamy cream cheese frosting.",
    image: "https://www.spoonforkbacon.com/wp-content/uploads/2021/03/carrot_cake_recipe_card.jpg",
    category: "Cakes",
  },
  {
    id: "7",
    name: "Cheesecake",
    price: "$25.00",
    shortDescription: "A classic creamy cheesecake.",
    description:
      "Our classic cheesecake is smooth, creamy, and rich in flavor. It features a buttery graham cracker crust and a tangy cream cheese filling.",
    image: "https://www.livewellbakeoften.com/wp-content/uploads/2019/05/Classic-Cheesecake-Recipe-25-500x500.jpg",
    category: "Cakes",
  },
  {
    id: "8",
    name: "Black Forest Cake",
    price: "$30.00",
    shortDescription: "A rich chocolate cake with cherries.",
    description:
      "This Black Forest cake is made with layers of chocolate sponge cake, whipped cream, and cherries, topped with chocolate shavings.",
    image: "https://static01.nyt.com/images/2020/01/15/dining/ss-black-forest-cake/merlin_165684495_6689b1a0-42b5-4228-b871-37bb983d797e-superJumbo.jpg",
    category: "Cakes",
  },
  {
    id: "9",
    name: "Coffee Walnut Cake",
    price: "$22.00",
    shortDescription: "A flavorful coffee and walnut cake.",
    description:
      "Our coffee walnut cake is made with rich coffee and crunchy walnuts, providing a perfect balance of flavors.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm_x6dPWEkwVzXKOZ0eNO31sJU7BSDdy7U7A&s",
    category: "Cakes",
  },
  {
    id: "10",
    name: "Fruit Cake",
    price: "$28.00",
    shortDescription: "A classic fruit cake with dried fruits.",
    description:
      "Our fruit cake is packed with a variety of dried fruits and nuts, providing a rich and flavorful treat.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpPNm6PexeulkZOuhrStaHk9aNY3wJEkwc7A&s",
    category: "Cakes",
  },
  {
    id: "11",
    name: "Almond Croissant",
    price: "$4.00",
    shortDescription: "A buttery croissant with almond filling.",
    description:
      "Our almond croissants are filled with a rich almond paste and topped with slivered almonds.",
    image: "https://i0.wp.com/www.aceofspoons.com/wp-content/uploads/2022/09/almond-croissants-15-of-19-scaled.jpg?fit=1707%2C2560",
    category: "Pastries",
  },
  {
    id: "12",
    name: "Blueberry Muffin",
    price: "$3.00",
    shortDescription: "A moist and flavorful blueberry muffin.",
    description:
      "Packed with fresh blueberries, our muffins are baked to perfection, offering a delightful burst of flavor in every bite.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEJxYgcz-jXe2xv8xG2JXQdrttRM-qX0CMQ&s",
    category: "Pastries",
  },
  {
    id: "13",
    name: "Chocolate Croissant",
    price: "$4.50",
    shortDescription: "A flaky croissant with a chocolate filling.",
    description:
      "Our chocolate croissants are filled with rich chocolate, providing a perfect treat for any time of day.",
    image: "https://www.schulstadbakerysolutions.com/contentassets/12b0d3749b7247c9a90781538d64053e/chocolate-croissant.jpg?width=1024&rmode=Crop&height=350",
    category: "Pastries",
  },
  {
    id: "14",
    name: "Cinnamon Roll",
    price: "$3.50",
    shortDescription: "A soft and gooey cinnamon roll.",
    description:
      "Our cinnamon rolls are soft, gooey, and topped with a rich cream cheese icing. Perfect for breakfast or as a sweet snack.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAfOsewHckwbW_wSdV7zyw37PgSjwF38WbGw&s",
    category: "Pastries",
  },
  {
    id: "15",
    name: "Raspberry Danish",
    price: "$4.00",
    shortDescription: "A flaky danish with raspberry filling.",
    description:
      "Our raspberry danish is made with a buttery pastry and filled with a sweet raspberry jam.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmV_O2UteLxc4DyWght0owBiLp4jJqpnSraQ&s",
    category: "Pastries",
  },
  {
    id: "16",
    name: "Apple Turnover",
    price: "$3.00",
    shortDescription: "A crisp pastry filled with apple.",
    description:
      "Our apple turnovers are made with a flaky pastry and filled with spiced apple filling.",
    image: "https://www.jessicagavin.com/wp-content/uploads/2022/09/apple-turnovers-27-1200.jpg",
    category: "Pastries",
  },
  {
    id: "17",
    name: "Lemon Tart",
    price: "$5.00",
    shortDescription: "A tart filled with lemon curd.",
    description:
      "Our lemon tarts are made with a crisp pastry shell, filled with tangy lemon curd.",
    image: "https://thecafesucrefarine.com/wp-content/uploads/2022/04/French-Lemon-Tart-11.jpg",
    category: "Pastries",
  },
  {
    id: "18",
    name: "Pain au Chocolat",
    price: "$4.00",
    shortDescription: "A classic French pastry with chocolate.",
    description:
      "Our pain au chocolat is made with buttery pastry and filled with rich chocolate.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuR2D4JpBm1DHkSuUq8DmTGhBthWuMxxZzTA&s",
    category: "Pastries",
  },
  {
    id: "19",
    name: "Cherry Pie",
    price: "$5.50",
    shortDescription: "A pie filled with sweet cherries.",
    description:
      "Our cherry pies are made with a flaky crust and filled with sweet, juicy cherries.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZN4U-NJ1Yy223YYbUhf74hVQE-yoOWiI5ug&s",
    category: "Pastries",
  },
  {
    id: "20",
    name: "Vanilla Eclair",
    price: "$4.50",
    shortDescription: "A classic eclair with vanilla filling.",
    description:
      "Our vanilla eclairs are filled with smooth vanilla custard and topped with chocolate glaze.",
    image: "https://delidoor.com.au/cdn/shop/files/dessert-vanilla-eclair-40542005919980.jpg?v=1714462684",
    category: "Pastries",
  },
  {
    id: "21",
    name: "Chocolate Chip Cookies",
    price: "$10.00",
    shortDescription: "A dozen freshly baked chocolate chip cookies.",
    description:
      "Our chocolate chip cookies are baked to perfection, with a crispy edge and a chewy center. Made with rich chocolate chips, they are a treat for all ages.",
    image: "https://www.bhg.com/thmb/ARwlwRFvxK4g-TYSKLiuDy3y8T4=/4000x0/filters:no_upscale():strip_icc()/bhg-recipe-cookies-food-processor-chocolate-chip-cookies-Hero-01-5b0c046d2a3d4328b52b28f2a5135c8b.jpg",
    category: "Cookies",
  },
  {
    id: "22",
    name: "Oatmeal Raisin Cookies",
    price: "$10.00",
    shortDescription: "A dozen chewy oatmeal raisin cookies.",
    description:
      "Our oatmeal raisin cookies are soft and chewy, made with plump raisins and a hint of cinnamon. Perfect for a wholesome snack.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmcyF70wEh1prWSOvKauHFI-Yxvl2sm37w1w&s",
    category: "Cookies",
  },
  {
    id: "23",
    name: "Peanut Butter Cookies",
    price: "$10.00",
    shortDescription: "A dozen rich peanut butter cookies.",
    description:
      "Our peanut butter cookies are rich and buttery, with a soft and chewy texture. Made with creamy peanut butter, they are a delight for peanut butter lovers.",
    image: "https://www.bhg.com/thmb/VN0gik9QpPVctq8l-iLQp43qUBg=/4000x0/filters:no_upscale():strip_icc()/bhg-recipe-cookies-peanut-butter-cookies-Hero-01-6dc51e3bf14545f9b897ae557ffad3c9.jpg",
    category: "Cookies",
  },
  {
    id: "24",
    name: "Snickerdoodle Cookies",
    price: "$10.00",
    shortDescription: "A dozen classic snickerdoodle cookies.",
    description:
      "Our snickerdoodle cookies are soft and chewy, coated in cinnamon sugar. They have a perfect balance of sweetness and spice.",
    image: "https://stordfkenticomedia.blob.core.windows.net/df-us/rms/media/recipesmedia/recipes/retail/x17/1997/may/2019_df_retail_snickerdoodle-cookies_20164_600x600.jpg?ext=.jpg",
    category: "Cookies",
  },
  {
    id: "25",
    name: "Double Chocolate Cookies",
    price: "$10.00",
    shortDescription: "A dozen double chocolate cookies.",
    description:
      "Our double chocolate cookies are made with cocoa powder and loaded with chocolate chips, providing a rich and intense chocolate flavor.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdZlWELu5_aTdhL7pb77k8e_ad5b463Wdhiw&s",
    category: "Cookies",
  },
  {
    id: "26",
    name: "White Chocolate Macadamia Cookies",
    price: "$10.00",
    shortDescription: "A dozen white chocolate macadamia cookies.",
    description:
      "Our white chocolate macadamia cookies are packed with creamy white chocolate chips and crunchy macadamia nuts, offering a delightful contrast of textures.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Zk07IUTaU3Fn5d6lH38LPUkFQ8gY1w6b0w&s",
    category: "Cookies",
  },
  {
    id: "27",
    name: "Gingerbread Cookies",
    price: "$10.00",
    shortDescription: "A dozen spiced gingerbread cookies.",
    description:
      "Our gingerbread cookies are spiced with ginger, cinnamon, and cloves, and have a soft and chewy texture. Perfect for the holiday season.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPE34HCKYrtlauUyiJThquWhuMiW8MSIpgQA&s",
    category: "Cookies",
  },
  {
    id: "28",
    name: "Sugar Cookies",
    price: "$10.00",
    shortDescription: "A dozen classic sugar cookies.",
    description:
      "Our sugar cookies are soft and buttery, with a delicate vanilla flavor. They are perfect for decorating or enjoying plain.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6z7LI_AU3bu2EWyplF2gRtoUPWNeW-69oiQ&s",
    category: "Cookies",
  },
  {
    id: "29",
    name: "Almond Biscotti",
    price: "$10.00",
    shortDescription: "A dozen crunchy almond biscotti.",
    description:
      "Our almond biscotti are twice-baked for a crisp texture, and are packed with crunchy almonds. Perfect for dunking in coffee or tea.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTjXyPJYbM6qjT6f9mBNijFhoA34vPmK2sMA&s",
    category: "Cookies",
  },
  {
    id: "30",
    name: "M&M Cookies",
    price: "$10.00",
    shortDescription: "A dozen colorful M&M cookies.",
    description:
      "Our M&M cookies are soft and chewy, loaded with colorful M&M candies. They are a fun and festive treat for all ages.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8_GjqBLHx1o7JKBRxOoznEqISJfz37pgmcg&s",
    category: "Cookies",
  },
];
 
 
export default AllProductsList;