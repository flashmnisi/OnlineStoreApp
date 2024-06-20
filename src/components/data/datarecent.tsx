import { KeyboardAvoidingView } from "react-native";

export const datarecent = [
        {
          id: 1,
          name: 'stove',
          category: 'kitchen',
          price: 3500,
          image: require('../images/stove1.jpeg'),
          size: 'Large 8"',
          description:'The best you can get with low price' ,
          images: [
            require('../images/stove1.jpeg'),
            require('../images/stove2.jpeg'), 
            require('../images/stove3.jpeg'),
          ],
        },
        {
          id: 2,
          name: 'microwave',
          model: 150,
          price: 999,
          image: require('../images/micro.jpeg'),
          size: 'Large 12"',
          description:'The best you can get with low price' ,
          images: [
            require('../images/micro.jpeg'),
            require('../images/micro1.jpeg'),
            require('../images/micro2.jpeg'),
          ],
        },
        {
          id:3,
          name: 'fridge',
          model: 250,
          rating: '4.2',
          price: 299,
          image: require('../images/fridge.jpeg'),
          size: 'Large 10"',
          description:'The best you can get with low price' ,
          images: [
            require('../images/fridge.jpeg'),
          ],
        },

        {
          id:4,
          name: 'bed',
          model: 250,
          price: 14499,
          image: require('../images/bed2.jpeg'),
          size: 'Queen"',
          description:'The best you can get with low price' ,
          images: [
            require('../images/bed2.jpeg'),
            require('../images/bed1.webp'),
          ],
        },
        {
          id:5,
          name: 'blanket',
          weight: 300,
          rating: '4.5',
          price: 299,
          isTopOfTheWeek: false,
          image: require('../images/blanket.jpeg'),
          size: 'Large"',
          description:'The best you can get with low price' ,
          images: [
            require('../images/blanket.jpeg'),
            require('../images/blanket1.jpeg'),
          ],
        },
        {
          id:6,
          name: 'wardrobe',
          model: 350,
          rating: '4.2',
          price: 4993,
          image: require('../images/ward1.webp'),
          size: 'Large double"',
          description:'The best you can get with low price' ,
          images: [
            require('../images/ward1.webp'),
            require('../images/ward2.webp'),
            require('../images/ward3.webp'),
          ],
        },

        {
          id:7,
          name: 'grinder',
          model: 200,
          price: 1299,
          image: require('../images/grind.jpeg'),
          size: 'Medium',
          description:'The best you can get with low price' ,
          images: [
                  require('../images/grind.jpeg'),
                  require('../images/grind1.jpeg'),
                  require('../images/grind2.jpeg'),

          ],
        },
        {
          id:8,
          name: 'drill',
          weight: 500,
          rating: '4.5',
          price: 199,
          image: require('../images/drill.webp'),
          size: 'Large',
          description:'The best you can get with low price' ,
          images: [
          require('../images/drill.webp'),
          require('../images/drill1.jpeg'),
          require('../images/drill2.jpeg'),

          ],
        },
        {
          id:9,
          name: 'tv',
          model: 150,
          price: 5499,
          image: require('../images/tv.jpeg'),
          size: 'Large Glass',
          crust: 'plasma',
          description:'The best you can get with low price' ,
          images: [
          require('../images/tv.jpeg'),
          require('../images/tv1.jpeg'),
          require('../images/tv2.jpeg'),

          ],
        },
  ];