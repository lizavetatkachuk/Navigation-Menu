import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
class MenuExample extends  React.Component {
    constructor(props) {
        super(props)
        this.state = {
            focused : 0
        }
    };
    clicked(index){
        // Обработчик клика обновит состояние
        // изменив индекс на сфокусированный элемент меню

        this.setState(state=>({focused: index}));
    }
render()
{
    // Здесь мы читаем свойство items, которое было передано
    // атрибутом, при создании компонента
    var self = this;

    // Метод map пройдется по массиву элементов меню,
    // и возвратит массив с <li> элементами.

    return (
        <div>
            <ul>{ this.props.items.map(function(m, index){

                var style = '';

                if(self.state.focused == index){
                    style = 'focused';
                }

                // Обратите внимание на использование метода bind(). Он делает
                // index доступным в функции clicked:

                return <li className={style} onClick={self.clicked.bind(self, index)}>{m}</li>;

            }) }

            </ul>

            <p>Selected: {this.props.items[this.state.focused]}</p>
        </div>
    );
}

};

// Отображаем компонент меню на странице, передав ему массив с элементами


ReactDOM.render(<MenuExample items={ ['Home', 'Services', 'About', 'Contact us'] }  />, document.getElementById('root'));
registerServiceWorker();
