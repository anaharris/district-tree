const trees = [
  {key: "Abrovitae", text: "Abrovitae", value: "Abrovitae"},
  {key: "Alleghany serviceberry", text: "Alleghany serviceberry", value: "Alleghany serviceberry"},
  {key: "American Holly", text: "American Holly", value: "American Holly"},
  {key: "American Smoketree", text: "American Smoketree", value: "American Smoketree"},
  {key: "American beech", text: "American beech", value: "American beech"},
  {key: "American elm", text: "American elm", value: "American elm"},
  {key: "American hop hornbeam", text: "American hop hornbeam", value: "American hop hornbeam"},
  {key: "American linden", text: "American linden", value: "American linden"},
  {key: "American sycamore", text: "American sycamore", value: "American sycamore"},
  {key: "Amur maackia", text: "Amur maackia", value: "Amur maackia"},
  {key: "Amur maple", text: "Amur maple", value: "Amur maple"},
  {key: "Arnold crabapple", text: "Arnold crabapple", value: "Arnold crabapple"},
  {key: "Ash", text: "Ash", value: "Ash"},
  {key: "Augustine elm", text: "Augustine elm", value: "Augustine elm"},
  {key: "Bald cypress", text: "Bald cypress", value: "Bald cypress"},
  {key: "Bea Schwartz Dutch elm", text: "Bea Schwartz Dutch elm", value: "Bea Schwartz Dutch elm"},
  {key: "Bear Oak", text: "Bear Oak", value: "Bear Oak"},
  {key: "Birch", text: "Birch", value: "Birch"},
  {key: "Black locust", text: "Black locust", value: "Black locust"},
  {key: "Black oak", text: "Black oak", value: "Black oak"},
  {key: "Black walnut", text: "Black walnut", value: "Black walnut"},
  {key: "Blackjack Oak", text: "Blackjack Oak", value: "Blackjack Oak"},
  {key: "Blandford Dutch elm", text: "Blandford Dutch elm", value: "Blandford Dutch elm"},
  {key: "Bloodgood london plane tree", text: "Bloodgood london plane tree", value: "Bloodgood london plane tree"}, {key: "Boxelder maple", text: "Boxelder maple", value: "Boxelder maple"}, {key: "Bradford callery pear", text: "Bradford callery pear", value: "Bradford callery pear"}, {key: "Bur oak", text: "Bur oak", value: "Bur oak"}, {key: "Carolina poplar", text: "Carolina poplar", value: "Carolina poplar"}, {key: "Carolina silverbell", text: "Carolina silverbell", value: "Carolina silverbell"}, {key: "Cherry", text: "Cherry", value: "Cherry"}, {key: "Cherry (Snowgoose)", text: "Cherry (Snowgoose)", value: "Cherry (Snowgoose)"}, {key: "Cherrybark Oak", text: "Cherrybark Oak", value: "Cherrybark Oak"}, {key: "Chestnut oak", text: "Chestnut oak", value: "Chestnut oak"}, {key: "Chinese Fringetree", text: "Chinese Fringetree", value: "Chinese Fringetree"}, {key: "Chinese elm", text: "Chinese elm", value: "Chinese elm"}, {key: "Chinese flame tree", text: "Chinese flame tree", value: "Chinese flame tree"}, {key: "Chinese fringetree", text: "Chinese fringetree", value: "Chinese fringetree"}, {key: "Chinese pistachio", text: "Chinese pistachio", value: "Chinese pistachio"}, {key: "Chokecherry", text: "Chokecherry", value: "Chokecherry"}, {key: "Columnar English oak", text: "Columnar English oak", value: "Columnar English oak"}, {key: "Columnare Norway maple", text: "Columnare Norway maple", value: "Columnare Norway maple"}, {key: "Columnare red maple", text: "Columnare red maple", value: "Columnare red maple"}, {key: "Columnare sugar maple", text: "Columnare sugar maple", value: "Columnare sugar maple"}, {key: "Commelin Dutch elm", text: "Commelin Dutch elm", value: "Commelin Dutch elm"}, {key: "Copper Beech", text: "Copper Beech", value: "Copper Beech"}, {key: "Crabapple", text: "Crabapple", value: "Crabapple"}, {key: "Crabapple (Harvest Gold)", text: "Crabapple (Harvest Gold)", value: "Crabapple (Harvest Gold)"}, {key: "Crape myrtle", text: "Crape myrtle", value: "Crape myrtle"}, {key: "Crimean linden", text: "Crimean linden", value: "Crimean linden"}, {key: "Crimson Cloud hawthorn", text: "Crimson Cloud hawthorn", value: "Crimson Cloud hawthorn"}, {key: "Crimson King Norway maple", text: "Crimson King Norway maple", value: "Crimson King Norway maple"}, {key: "Cucumber magnolia", text: "Cucumber magnolia", value: "Cucumber magnolia"}, {key: "Darlington oak", text: "Darlington oak", value: "Darlington oak"}, {key: "Dawn redwood", text: "Dawn redwood", value: "Dawn redwood"}, {key: "Deborah Norway maple", text: "Deborah Norway maple", value: "Deborah Norway maple"}, {key: "Deodar cedar", text: "Deodar cedar", value: "Deodar cedar"}, {key: "Dogwood", text: "Dogwood", value: "Dogwood"}, {key: "Dogwood (Kousa)", text: "Dogwood (Kousa)", value: "Dogwood (Kousa)"}, {key: "Downy serviceberry", text: "Downy serviceberry", value: "Downy serviceberry"}, {key: "Dura heat' river birch", text: "Dura heat' river birch", value: "Dura heat' river birch"}, {key: "Eastern redbud", text: "Eastern redbud", value: "Eastern redbud"}, {key: "Eastern redcedar", text: "Eastern redcedar", value: "Eastern redcedar"}, {key: "Elm", text: "Elm", value: "Elm"}, {key: "Elm (Accolade)", text: "Elm (Accolade)", value: "Elm (Accolade)"}, {key: "Emerald Queen Norway maple", text: "Emerald Queen Norway maple", value: "Emerald Queen Norway maple"}, {key: "European beech", text: "European beech", value: "European beech"}, {key: "European black alder", text: "European black alder", value: "European black alder"}, {key: "European mountain-ash", text: "European mountain-ash", value: "European mountain-ash"}, {key: "Flowering Dogwood", text: "Flowering Dogwood", value: "Flowering Dogwood"}, {key: "Forest Pansy redbud", text: "Forest Pansy redbud", value: "Forest Pansy redbud"}, {key: "Ginkgo", text: "Ginkgo", value: "Ginkgo"}, {key: "Ginkgo (female)", text: "Ginkgo (female)", value: "Ginkgo (female)"}, {key: "Ginkgo (male)", text: "Ginkgo (male)", value: "Ginkgo (male)"}, {key: "Ginkgo Princeton Sentry", text: "Ginkgo Princeton Sentry", value: "Ginkgo Princeton Sentry"}, {key: "Glenleven linden", text: "Glenleven linden", value: "Glenleven linden"}, {key: "Golden chain tree", text: "Golden chain tree", value: "Golden chain tree"}, {key: "Goldenrain tree", text: "Goldenrain tree", value: "Goldenrain tree"}, {key: "Green Mountain sugar maple", text: "Green Mountain sugar maple", value: "Green Mountain sugar maple"}, {key: "Green Pillar Oak", text: "Green Pillar Oak", value: "Green Pillar Oak"}, {key: "Green Vase Japanese zelkova", text: "Green Vase Japanese zelkova", value: "Green Vase Japanese zelkova"}, {key: "Green ash", text: "Green ash", value: "Green ash"}, {key: "Greenspire littleleaf linden", text: "Greenspire littleleaf linden", value: "Greenspire littleleaf linden"}, {key: "Groenveldt Dutch elm", text: "Groenveldt Dutch elm", value: "Groenveldt Dutch elm"}, {key: "Hackberry", text: "Hackberry", value: "Hackberry"}, {key: "Hardy Rubber Tree", text: "Hardy Rubber Tree", value: "Hardy Rubber Tree"}, {key: "Hedge maple", text: "Hedge maple", value: "Hedge maple"}, {key: "Hemlock", text: "Hemlock", value: "Hemlock"}, {key: "Hickory", text: "Hickory", value: "Hickory"}, {key: "Honeylocust", text: "Honeylocust", value: "Honeylocust"}, {key: "Hornbeam", text: "Hornbeam", value: "Hornbeam"}, {key: "Hornbeam (European) (Common)", text: "Hornbeam (European) (Common)", value: "Hornbeam (European) (Common)"}, {key: "Horsechestnut", text: "Horsechestnut", value: "Horsechestnut"}, {key: "Ironwood", text: "Ironwood", value: "Ironwood"}, {key: "Japanese Apricot", text: "Japanese Apricot", value: "Japanese Apricot"}, {key: "Japanese Stewartia", text: "Japanese Stewartia", value: "Japanese Stewartia"}, {key: "Japanese cryptomeria", text: "Japanese cryptomeria", value: "Japanese cryptomeria"}, {key: "Japanese pagodatree", text: "Japanese pagodatree", value: "Japanese pagodatree"}, {key: "Japanese zelkova", text: "Japanese zelkova", value: "Japanese zelkova"}, {key: "Jefferson Elm", text: "Jefferson Elm", value: "Jefferson Elm"}, {key: "Katsuratree", text: "Katsuratree", value: "Katsuratree"}, {key: "Kentucky coffeetree", text: "Kentucky coffeetree", value: "Kentucky coffeetree"}, {key: "Kwanzan cherry", text: "Kwanzan cherry", value: "Kwanzan cherry"}, {key: "Lavalle hawthorn", text: "Lavalle hawthorn", value: "Lavalle hawthorn"}, {key: "Lilac", text: "Lilac", value: "Lilac"}, {key: "Linden", text: "Linden", value: "Linden"}, {key: "Littleleaf linden", text: "Littleleaf linden", value: "Littleleaf linden"}, {key: "Live oak", text: "Live oak", value: "Live oak"}, {key: "Loblolly Pine", text: "Loblolly Pine", value: "Loblolly Pine"}, {key: "London plane tree", text: "London plane tree", value: "London plane tree"}, {key: "Magnolia", text: "Magnolia", value: "Magnolia"}, {key: "Magnolia (Galaxy)", text: "Magnolia (Galaxy)", value: "Magnolia (Galaxy)"}, {key: "Maple", text: "Maple", value: "Maple"}, {key: "Marshall green ash", text: "Marshall green ash", value: "Marshall green ash"}, {key: "Mimosa", text: "Mimosa", value: "Mimosa"}, {key: "Moraine honeylocust", text: "Moraine honeylocust", value: "Moraine honeylocust"}, {key: "Mulberry", text: "Mulberry", value: "Mulberry"}, {key: "New Harmony elm", text: "New Harmony elm", value: "New Harmony elm"}, {key: "No Tree", text: "No Tree", value: "No Tree"}, {key: "Norway Spruce", text: "Norway Spruce", value: "Norway Spruce"}, {key: "Norway maple", text: "Norway maple", value: "Norway maple"}, {key: "Nuttall oak", text: "Nuttall oak", value: "Nuttall oak"}, {key: "Oak", text: "Oak", value: "Oak"}, {key: "October Glory red maple", text: "October Glory red maple", value: "October Glory red maple"}, {key: "Okame cherry", text: "Okame cherry", value: "Okame cherry"}, {key: "Osage orange", text: "Osage orange", value: "Osage orange"}, {key: "Other (See Notes)", text: "Other (See Notes)", value: "Other (See Notes)"}, {key: "Overcup oak", text: "Overcup oak", value: "Overcup oak"}, {key: "Pagoda Dogwood", text: "Pagoda Dogwood", value: "Pagoda Dogwood"}, {key: "Paperbark Maple", text: "Paperbark Maple", value: "Paperbark Maple"}, {key: "Persian Parrotia", text: "Persian Parrotia", value: "Persian Parrotia"}, {key: "Pin oak", text: "Pin oak", value: "Pin oak"}, {key: "Pink-Flowering Dogwood", text: "Pink-Flowering Dogwood", value: "Pink-Flowering Dogwood"}, {key: "Pioneer elm", text: "Pioneer elm", value: "Pioneer elm"}, {key: "Plane tree", text: "Plane tree", value: "Plane tree"}, {key: "Pond cypress", text: "Pond cypress", value: "Pond cypress"}, {key: "Poplar", text: "Poplar", value: "Poplar"}, {key: "Post Oak", text: "Post Oak", value: "Post Oak"}, {key: "Post oak", text: "Post oak", value: "Post oak"}, {key: "Princeton elm", text: "Princeton elm", value: "Princeton elm"}, {key: "Purple leaf plum", text: "Purple leaf plum", value: "Purple leaf plum"}, {key: "Radiant crabapple", text: "Radiant crabapple", value: "Radiant crabapple"}, {key: "Red Buckeye", text: "Red Buckeye", value: "Red Buckeye"}, {key: "Red horsechestnut", text: "Red horsechestnut", value: "Red horsechestnut"}, {key: "Red maple", text: "Red maple", value: "Red maple"}, {key: "Red oak", text: "Red oak", value: "Red oak"}, {key: "Redbud", text: "Redbud", value: "Redbud"}, {key: "Redmond American Linden", text: "Redmond American Linden", value: "Redmond American Linden"}, {key: "Regent Japanese pagodatree", text: "Regent Japanese pagodatree", value: "Regent Japanese pagodatree"}, {key: "River birch", text: "River birch", value: "River birch"}, {key: "Rock chestnut oak", text: "Rock chestnut oak", value: "Rock chestnut oak"}, {key: "Rotundiloba sweetgum", text: "Rotundiloba sweetgum", value: "Rotundiloba sweetgum"}, {key: "Royal paulownia", text: "Royal paulownia", value: "Royal paulownia"}, {key: "Sassafras", text: "Sassafras", value: "Sassafras"}, {key: "Saucer Magnolia", text: "Saucer Magnolia", value: "Saucer Magnolia"}, {key: "Saucer magnolia", text: "Saucer magnolia", value: "Saucer magnolia"}, {key: "Sawtooth oak", text: "Sawtooth oak", value: "Sawtooth oak"}, {key: "Scarlet oak", text: "Scarlet oak", value: "Scarlet oak"}, {key: "Seneca Chief Sugar maple", text: "Seneca Chief Sugar maple", value: "Seneca Chief Sugar maple"}, {key: "Serviceberry", text: "Serviceberry", value: "Serviceberry"}, {key: "Shadblow serviceberry", text: "Shadblow serviceberry", value: "Shadblow serviceberry"}, {key: "Shademaster honeylocust", text: "Shademaster honeylocust", value: "Shademaster honeylocust"}, {key: "Shingle oak", text: "Shingle oak", value: "Shingle oak"}, {key: "Shumard oak", text: "Shumard oak", value: "Shumard oak"}, {key: "Siberian elm", text: "Siberian elm", value: "Siberian elm"}, {key: "Silver linden", text: "Silver linden", value: "Silver linden"}, {key: "Silver maple", text: "Silver maple", value: "Silver maple"}, {key: "Skyline honeylocust", text: "Skyline honeylocust", value: "Skyline honeylocust"}, {key: "Slender Silhouette Sweetgum", text: "Slender Silhouette Sweetgum", value: "Slender Silhouette Sweetgum"}, {key: "Smooth-leaf Elm", text: "Smooth-leaf Elm", value: "Smooth-leaf Elm"}, {key: "Snowdrift crabapple", text: "Snowdrift crabapple", value: "Snowdrift crabapple"}, {key: "Sourwood", text: "Sourwood", value: "Sourwood"}, {key: "Southern catalpa", text: "Southern catalpa", value: "Southern catalpa"}, {key: "Southern magnolia", text: "Southern magnolia", value: "Southern magnolia"}, {key: "Southern red oak", text: "Southern red oak", value: "Southern red oak"}, {key: "Sovereign pin oak", text: "Sovereign pin oak", value: "Sovereign pin oak"}, {key: "Staghorn Sumac", text: "Staghorn Sumac", value: "Staghorn Sumac"}, {key: "Star magnolia", text: "Star magnolia", value: "Star magnolia"}, {key: "Sugar maple", text: "Sugar maple", value: "Sugar maple"}, {key: "Sugarberry", text: "Sugarberry", value: "Sugarberry"}, {key: "Summershade Norway maple", text: "Summershade Norway maple", value: "Summershade Norway maple"}, {key: "Sunburst honeylocust", text: "Sunburst honeylocust", value: "Sunburst honeylocust"}, {key: "Swamp white oak", text: "Swamp white oak", value: "Swamp white oak"}, {key: "Sweetbay magnolia", text: "Sweetbay magnolia", value: "Sweetbay magnolia"}, {key: "Sweetgum", text: "Sweetgum", value: "Sweetgum"}, {key: "Sweetgum (sterile)", text: "Sweetgum (sterile)", value: "Sweetgum (sterile)"}, {key: "Sycamore maple", text: "Sycamore maple", value: "Sycamore maple"}, {key: "Thornless honeylocust", text: "Thornless honeylocust", value: "Thornless honeylocust"}, {key: "Tree-of-heaven", text: "Tree-of-heaven", value: "Tree-of-heaven"}, {key: "Trident maple", text: "Trident maple", value: "Trident maple"}, {key: "Tulip poplar", text: "Tulip poplar", value: "Tulip poplar"}, {key: "Tupelo", text: "Tupelo", value: "Tupelo"}, {key: "Turkey oak", text: "Turkey oak", value: "Turkey oak"}, {key: "Village Green Japanese zelkova", text: "Village Green Japanese zelkova", value: "Village Green Japanese zelkova"}, {key: "Washington hawthorn", text: "Washington hawthorn", value: "Washington hawthorn"}, {key: "Water oak", text: "Water oak", value: "Water oak"}, {key: "Weeping willow", text: "Weeping willow", value: "Weeping willow"}, {key: "White oak", text: "White oak", value: "White oak"}, {key: "White pine", text: "White pine", value: "White pine"}, {key: "Whitehouse callery pear", text: "Whitehouse callery pear", value: "Whitehouse callery pear"}, {key: "Willow", text: "Willow", value: "Willow"}, {key: "Willow oak", text: "Willow oak", value: "Willow oak"}, {key: "Yellow buckeye", text: "Yellow buckeye", value: "Yellow buckeye"}, {key: "Yellowwood", text: "Yellowwood", value: "Yellowwood"}, {key: "Yoshino cherry", text: "Yoshino cherry", value: "Yoshino cherry"},
]

export default trees
