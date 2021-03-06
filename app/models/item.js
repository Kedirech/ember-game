var item = DS.Model.extend({
  itemType:DS.belongsTo('itemType'),
  equipmentType:DS.attr('string'),
  slashResist:DS.attr('number'),
  pierceResist:DS.attr('number'),
  fireResist:DS.attr('number'),
  earthResist:DS.attr('number'),

  attackDamage:DS.attr('number'),
  attackSpeed:DS.attr('number'),
  attackRange:DS.attr('number'),
  attackType:DS.attr('string')
});

item.reopenClass({
  FIXTURES:[
    {
      id:1,
      name:"Brack",
      classType:1,
      level:4,
      tier:1,
      xp:100,
      //image:'assets/portaits/Wizard.png'
    },
    {
      id:2,
      name:"Derek",
      classType:2,
      level:4,
      tier:2,
      xp:123,
      //image:'images/portraits/Wizard.png'
    },
    {
      id:3,
      name:"Justin",
      classType:3,
      level:4,
      tier:3,
      xp:15,
      //image:'images/portraits/Warrior.png'
    },
    {
      id:4,
      name:"Carter",
      classType:6,
      level:2,
      tier:7,
      xp:15,
      //image:'images/portraits/Warrior.png'
    },
    {
      id:5,
      name:"Brian",
      classType:9,
      level:5,
      tier:2,
      xp:15,
      //image:'images/portraits/Warrior.png'
    },
    {
      id:6,
      name:"Bryce",
      classType:7,
      level:7,
      tier:2,
      xp:15,
      //image:'images/portraits/Warrior.png'
    },
    {
      id:7,
      name:"Jeremy",
      classType:4,
      level:5,
      tier:5,
      xp:15,
      //image:'images/portraits/Warrior.png'
    }
    ]
});

export default item;