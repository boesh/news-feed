import React from 'react';
import './App.css';
import Select from 'react-select';

const TAGS = [
  { value: 'All', label: 'Игры: все' },
  { value: 'Dota 2', label: 'Dota 2' },
  { value: 'CS:GO', label: 'CS:GO' },
  { value: 'LoL', label: 'LoL' }
];

const NEWSBLOCKS = [[['https://cdn.discordapp.com/attachments/581473266296684545/620420485192089600/MzE2NDNuaWpGRUkyT21W.png'],
 ['CS:GO'],
 ['https://media.discordapp.net/attachments/581473266296684545/620071425512046602/Group.png',],
  ['час назад'],
  ['Объявлены обладатели инвайтов на квалификации к DH Masters Malmö 2019'],
  ['DreamHack представила список приглашенных команд на закрытый этап квалификации для европейского, североамериканского и тихоокеанского регионов к следующему Masters-турниру.'],
['440XP'],['2'],['7'],['740']],
[[''],
['Dota 2',],
['https://media.discordapp.net/attachments/581473266296684545/620420011865014272/Group_1.png',],
 ['три часа назад'],
 ['Три игрока ушли из Mineski'],
 ['Nikolay “Nikobaby” Nikolov сегодня стал свободным агентом: о своем уходе из Весь мир, World Mineski болгарский игрок сообщил в твиттере. По словам комментатора студии Maincast Украина, Ukraine, UA Виталия “v1lat” Волочая, Nikobaby открыт для предложений из других регионов.'],
['440XP'],['Обсудить'],['1'],['2.4k']],
[['https://media.discordapp.net/attachments/581473266296684545/618925860480614400/csgopic.png'],
['Lord Mantis', 'CS:GO'],
['https://media.discordapp.net/attachments/581473266296684545/620071021462159405/Rectangle_2.1_3.png', 'https://media.discordapp.net/attachments/581473266296684545/620071425512046602/Group.png'],
 ['три часа назад'],
 ['DreamEaters vs NRG. Прогноз и ставка Lord Mantis'],
 ['Стартовый поединок между DreamEaters и NRG многими рассматривается как самый предсказуемый в первом игровом дне Berlin Major. Сыграет команда — молодой СНГ-коллектив, который имеет 15-й посев и пробился на мейджор через Play-in, заняв третье место на СНГ-миноре.'],
['440XP'],['5'],['1'],['3.7k']],
[[''],
['Dota 2',],
['https://media.discordapp.net/attachments/581473266296684545/620420011865014272/Group_1.png',],
 ['11:33'],
 ['Прогноз на матч forZe VS DreamEaters'],
 ['На данный момент forZe располагаются на 21 месте в списке лучших CS:GO-составов по мнению HLTV. Игроки имеют винрейт в 75% за последние 3 месяца, что говорит об их неплохой игровой форме и готовности побеждать в предстоящем матче.'],
['440XP'],['2'],['В закладки'],['740']]];



class NewsBlockItem extends React.Component
{
  constructor(props) {
    super();
    
    this.state = {
      
      pic:  props.pic,
      tags: props.tags,
      tagPics: props.tagPics,
      date: props.date,
      title: props.title,
      description: props.description,
      exp: props.exp,
      comments: props.comments,
      markers: props.markers,
      views: props.views,
    }
  }

  

  render() {
    return (
      <div>
        <div className='news-block'>
        
        <img className='news-block-main-pic' src={this.state.pic} alt=''></img>
   
            {this.state.tags.map((tag, i) => 
            <div key={i+10} className='news-block-tag'>
            <img className='news-block-tag-pic' src={this.state.tagPics[i]} alt=''></img>
            <div className='news-block-tag-name'>
              {tag}
            </div>
            </div>
            )}
          <div className='news-block-date'>
            {this.state.date}
          </div>
  
            <div className='news-block-title'>
            {this.state.title}
            </div>
            <div className='new-block-description'>
            {this.state.description}
            </div>
  
          
          <img className='news-block-exp-pic' src='https://media.discordapp.net/attachments/581473266296684545/620280484097687553/1.png' alt=''></img>
          <div className='news-block-exp-text'>
            {this.state.exp}
            </div>
          <img className='news-block-comment-pic' src='https://media.discordapp.net/attachments/581473266296684545/620281795304226816/1.png' alt=''></img>
          <div className='news-block-comment-text'>
            {this.state.comments}
            </div>
          <img className='news-block-marker-pic' src='https://media.discordapp.net/attachments/581473266296684545/620281880100732928/bcf5510a868b536e.png' alt=''></img>
          <div className='news-block-marker-text'>
            {this.state.markers}
            </div>
          <div className='news-block-view-text'>
            {this.state.views}
            </div>
          <img className='news-block-view-pic' src='https://media.discordapp.net/attachments/581473266296684545/620353928462073886/10cd66747765eaa5.png' alt=''></img>
        </div>
        </div>
    );
  }

}


const customStyles = {
  control: (base) => ({
    ...base,
    background: "rgba(255, 255, 255, 0.07);",
    searchable: false,
    borderWidth: 0,
    boxShadow: "none",
    width: '27.6923076923%',
    minWidth: 150,
  }),
  menu: base => ({
    ...base,
    background: "rgba(255, 255, 255, 0.9);",
    borderRadius: '0px 0px 6px 6px',
    marginTop: 0,
  }),
  menuList: base => ({
    ...base,
    padding: 0
  }),
  
  singleValue: base => ({
    ...base,
    color: 'white',
  }),
  clearIndicator: () => null,

  indicatorsContainer: () => ({
    color: 'rgba(255, 255, 255, 0.4)',
  })
};


class App extends React.Component {
  state = {
    selectedOption: { value: 'All', label: 'Игры: все' },
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;

    return (<div>
      <Select  className='news-tags'
        styles={customStyles}
        value={selectedOption}
        onChange={this.handleChange}
        options={TAGS}
      />
      <p></p>
      {NEWSBLOCKS.map((props, i) =>
       this.state.selectedOption.value === 'All' ?
        (<NewsBlockItem key={i} pic={props[0]}  tags={props[1]}
            tagPics={props[2]} date={props[3]} title={props[4]} 
        description={props[5]} exp={props[6]} comments={props[7]}
         markers={props[8]}  views={props[9]} />) :
          props[1].map(p =>
              p === this.state.selectedOption.value ? 
        (<NewsBlockItem key={i} pic={props[0]}  tags={props[1]} 
           tagPics={props[2]} date={props[3]} title={props[4]} 
        description={props[5]} exp={props[6]} comments={props[7]}
         markers={props[8]}  views={props[9]} />) : 
         (<div></div>)))}
      
      </div>
    );
  }
}

export default App;
