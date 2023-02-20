import React, {useEffect, useState} from "react";
import './ToDo.scss';
import {useTranslation} from "react-i18next";
import {Checkbox} from "../base/Radio/Checkbox";
import {Input} from "../base/Input/Input";
import {Button} from "../base/Button/Button";
import {v4} from 'uuid';

type ToDoItemsT = {
    value: string,
    isChecked: boolean,
    id: string
}

const expandLocalStorageValue = (key: string, arr: ToDoItemsT[]) => {
    const currentItem = JSON.parse(localStorage.getItem(key) || '');
    return localStorage.setItem(key, JSON.stringify({...currentItem, todoList: arr}))
}
type ToDoPropsT = {
    currentUser: string
}

export const ToDo = ({currentUser}: ToDoPropsT) => {
    const {t} = useTranslation();
    const currentUserTodoList = JSON.parse(localStorage.getItem(currentUser) || '').todoList;
    const [todoItems, setTodoItems] = useState<ToDoItemsT[]>(currentUserTodoList);
    const [todoValue, setTodoValue] = useState('');

    useEffect(()=> {
        expandLocalStorageValue(currentUser, todoItems);
    },[todoItems, currentUser])

    return <div className={'todo'}>
        <div className={'todo-inner'}>
            <div className={'todo-header'}>{t('todoHeader')}</div>
            {/*{todoItems.every(i => i.isChecked && <div>nice job</div>)}*/}
            <ul className={'todo-active'}>
                {todoItems?.map(i => !i.isChecked && <li key={i.id}>
                    <Checkbox
                        onChange={ () => {
                            setTodoItems(prevState =>
                                prevState.map(item => item.id === i.id ? {...item, isChecked: !item.isChecked} : item));
                            expandLocalStorageValue(currentUser, todoItems);
                        }
                        }/>
                    <span>{i.value}</span>
                </li>)}
            </ul>
            <ul className={'todo-checked'}>
                {todoItems.map(i => i.isChecked &&
                    <li key={i.id}>
                        <Checkbox
                            checked={i.isChecked}
                            onChange={()=> {
                                setTodoItems(prevState =>
                                    prevState.map(item => item.id === i.id ? {...item, isChecked: !item.isChecked} : item));
                                expandLocalStorageValue(currentUser, todoItems);
                            }}
                        />
                        {i.value}
                    </li>)}
            </ul>
            <Input
                size={"middle"}
                name={'todo'}
                type={'text'}
                onChange={(e) => setTodoValue(e.target.value)}
                value={todoValue}
                onKeyDown={(e) => {
                    if(e.key === 'Enter'){
                        setTodoItems(prevState => [...prevState, {
                            value: todoValue,
                            isChecked: false,
                            id: v4()
                        }]);
                        setTodoValue('');
                    }
                }}
            />
            <Button content={t('submit')} color={"purple-lavender"} size={"middle"}
                    onClick={() => {
                        setTodoItems(prevState => [...prevState, {value: todoValue, isChecked: false, id: v4()}]);
                        setTodoValue('');
                    }}
            />
        </div>
    </div>
}

// поправить стили для сделанных, плейсхолдер и добавить как элемент на гл стр + линк на отдельную стр
// кнопка логаут