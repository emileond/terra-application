import React from "react";

const textMapping = {
  continents: [
    <p>What actually is a continent, and how many are there?</p>,
    <h2>What does the dictionary say?</h2>,
    <p>
      Continent, noun, [ˈkɒn.tɪ.nənt] one of the seven large landmasses on the
      Earth`'`s surface, surrounded, or mainly surrounded, by sea and usually
      consisting of various countries.
    </p>,
    <h2>The Continents</h2>,
    <p>
      Africa, the Americas, Antarctica, Asia, Australia, together with Oceania,
      and Europe are considered to be continents.
    </p>,
    <p>
      The word continent is used to differentiate between various large land
      areas of Earth into which all the land surface of the planet is divided.
      The term refers to the 'mountain top' regions of the Earth not flooded by
      water, dry land. The level of the surrounding water ultimately defines the
      shape and borders of continents. More water implies less land and
      different outlines. Even more water, like that stored away as ice in the
      poles and glaciers, and you might live on a water planet, no continents.
    </p>,
    <p>
      All right, then, a continent is "a large, continuous area of land on
      Earth." All continents of the Earth together make up about one-third of
      the total surface of the planet. The fact is, more than two-thirds of the
      Earth's surface is covered by water. The landmasses of the Earth are
      unequally distributed, two-thirds of the continental landmass is located
      in the Northern Hemisphere (the upper half of the globe, north of the
      equator). Why is that? This might be just a feature of our current point
      in geological time because some million years ago, the bulk of the
      planet's landmass was in the Southern Hemisphere.
    </p>,
  ],
  oranges: [
    <p>
      The orange is the fruit of various citrus species in the family Rutaceae
      (see list of plants known as orange); it primarily refers to Citrus ×
      sinensis, which is also called sweet orange, to distinguish it from the
      related Citrus × aurantium, referred to as bitter orange. The sweet orange
      reproduces asexually (apomixis through nucellar embryony); varieties of
      sweet orange arise through mutations.
    </p>,
    <p>
      The orange is a hybrid between pomelo (Citrus maxima) and mandarin (Citrus
      reticulata). The chloroplast genome, and therefore the maternal line, is
      that of pomelo. The sweet orange has had its full genome sequenced.
    </p>,
    <p>
      The orange originated in a region comprising Southern China, Northeast
      India, and Myanmar, and the earliest mention of the sweet orange was in
      Chinese literature in 314 BC. As of 1987, orange trees were found to be
      the most cultivated fruit tree in the world. Orange trees are widely grown
      in tropical and subtropical climates for their sweet fruit. The fruit of
      the orange tree can be eaten fresh, or processed for its juice or fragrant
      peel. As of 2012, sweet oranges accounted for approximately 70% of citrus
      production.
    </p>,
    <p>
      In 2017, 73 million tonnes of oranges were grown worldwide, with Brazil
      producing 24% of the world total, followed by China and India.
    </p>,
  ],
  strawberries: [
    <p>
      The garden strawberry (or simply strawberry; Fragaria × ananassa) is a
      widely grown hybrid species of the genus Fragaria, collectively known as
      the strawberries, which are cultivated worldwide for their fruit. The
      fruit is widely appreciated for its characteristic aroma, bright red
      color, juicy texture, and sweetness. It is consumed in large quantities,
      either fresh or in such prepared foods as jam, juice, pies, ice cream,
      milkshakes, and chocolates. Artificial strawberry flavorings and aromas
      are also widely used in products such as candy, soap, lip gloss, perfume,
      and many others.
    </p>,
    <p>
      The garden strawberry was first bred in Brittany, France, in the 1750s via
      a cross of Fragaria virginiana from eastern North America and Fragaria
      chiloensis, which was brought from Chile by Amédée-François Frézier in
      1714. Cultivars of Fragaria × ananassa have replaced, in commercial
      production, the woodland strawberry (Fragaria vesca), which was the first
      strawberry species cultivated in the early 17th century.
    </p>,
    <p>
      The strawberry is not, from a botanical point of view, a berry.
      Technically, it is an aggregate accessory fruit, meaning that the fleshy
      part is derived not from the plant's ovaries but from the receptacle that
      holds the ovaries. Each apparent "seed" (achene) on the outside of the
      fruit is actually one of the ovaries of the flower, with a seed inside it.
    </p>,
    <p>
      In 2017, world production of strawberries was 9.2 million tonnes, led by
      China with 40% of the total.
    </p>,
  ],
  "fruit-salad": [
    <p>
      Fruit salad is a dish consisting of various kinds of fruit, sometimes
      served in a liquid, either their own juices or a syrup. In different
      forms, fruit salad can be served as an appetizer, a side salad, or a
      dessert. When served as an appetizer or dessert, a fruit salad is
      sometimes known as a fruit cocktail (often connoting a canned product), or
      fruit cup (when served in a small container).
    </p>,
  ],
  pineapples: [
    <p>
      The pineapple (Ananas comosus) is a tropical plant with an edible fruit
      and the most economically significant plant in the family Bromeliaceae.
      The pineapple is indigenous to South America, where it has been cultivated
      for many centuries. The introduction of the pineapple to Europe in the
      17th century made it a significant cultural icon of luxury. Since the
      1820s, pineapple has been commercially grown in greenhouses and many
      tropical plantations. Further, it is the third most important tropical
      fruit in world production. In the 20th century, Hawaii was a dominant
      producer of pineapples, especially for the US; however, by 2016, Costa
      Rica, Brazil, and the Philippines accounted for nearly one-third of the
      world's production of pineapples.
    </p>,
    <p>
      Pineapples grow as a small shrub; the individual flowers of the
      unpollinated plant fuse to form a multiple fruit. The plant is normally
      propagated from the offset produced at the top of the fruit, or from a
      side shoot, and typically mature within a year.
    </p>,
  ],
  lemons: [
    <p>
      The lemon, Citrus limon, is a species of small evergreen tree in the
      flowering plant family Rutaceae, native to South Asia, primarily North
      eastern India. Its fruits are round in shape.
    </p>,
    <p>
      The tree's ellipsoidal yellow fruit is used for culinary and non-culinary
      purposes throughout the world, primarily for its juice, which has both
      culinary and cleaning uses. The pulp and rind are also used in cooking and
      baking. The juice of the lemon is about 5% to 6% citric acid, with a pH of
      around 2.2, giving it a sour taste. The distinctive sour taste of lemon
      juice makes it a key ingredient in drinks and foods such as lemonade and
      lemon meringue pie.
    </p>,
  ],
  kiwis: [
    <p>
      Kiwifruit (often shortened to kiwi outside Australia and New Zealand), or
      Chinese gooseberry, is the edible berry of several species of woody vines
      in the genus Actinidia. The most common cultivar group of kiwifruit
      (Actinidia deliciosa 'Hayward') is oval, about the size of a large hen's
      egg: 5–8 centimetres (2–3 inches) in length and 4.5–5.5 cm (1 3⁄4–2 1⁄4
      in) in diameter. It has a thin, hair-like, fibrous, sour-but-edible light
      brown skin and light green or golden flesh with rows of tiny, black,
      edible seeds. The fruit has a soft texture with a sweet and unique
      flavour. In 2017, China produced 50% of the world total of kiwifruit.
    </p>,
    <p>
      Kiwifruit is native to central and eastern China. The first recorded
      description of the kiwifruit dates to the 12th century during the Song
      dynasty. In the early 20th century, cultivation of kiwifruit spread from
      China to New Zealand, where the first commercial plantings occurred. The
      fruit became popular with British and American servicemen stationed in New
      Zealand during World War II, and later became commonly exported, first to
      Great Britain and then to California in the 1960s.
    </p>,
  ],
  bananas: [
    <p>
      A banana is an elongated, edible fruit – botanically a berry – produced by
      several kinds of large herbaceous flowering plants in the genus Musa. In
      some countries, bananas used for cooking may be called "plantains",
      distinguishing them from dessert bananas. The fruit is variable in size,
      color, and firmness, but is usually elongated and curved, with soft flesh
      rich in starch covered with a rind, which may be green, yellow, red,
      purple, or brown when ripe. The fruits grow in clusters hanging from the
      top of the plant. Almost all modern edible seedless (parthenocarp) bananas
      come from two wild species – Musa acuminata and Musa balbisiana. The
      scientific names of most cultivated bananas are Musa acuminata, Musa
      balbisiana, and Musa × paradisiaca for the hybrid Musa acuminata × M.
      balbisiana, depending on their genomic constitution. The old scientific
      name for this hybrid, Musa sapientum, is no longer used.
    </p>,
  ],
  grapes: [
    <p>
      A grape is a fruit, botanically a berry, of the deciduous woody vines of
      the flowering plant genus Vitis.
    </p>,
    <p>
      Grapes can be eaten fresh as table grapes or they can be used for making
      wine, jam, grape juice, jelly, grape seed extract, raisins, vinegar, and
      grape seed oil. Grapes are a non-climacteric type of fruit, generally
      occurring in clusters.
    </p>,
  ],
};

export default textMapping;
