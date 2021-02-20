import React, { useState } from 'react'
import { FlatList, TextInput, TouchableOpacity, Alert, Modal, Text, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, addTodo } from '../Redux/actions/todo';

export const Todo = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [todo, setTodo] = useState('');

    const dispatch = useDispatch();
    const deleteCurrent = (key) => dispatch(deleteTodo(key));
    const todos = useSelector(state => state.todoReducer.todoList);
    const submitTodo = (todo) => dispatch(addTodo(todo));

    return (
        <View style={{ flex: 1, margin: 16 }}>
            <FlatList
                data={todos}
                keyExtractor={item => item.id}
                renderItem={(data) => {
                    return <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
                        <Text style={{ color: '#000', fontSize: 16 }}>{data.item.title}</Text>
                        <TouchableOpacity style={{ height: 25, width: 25, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 100 }}
                            onPress={() => deleteCurrent(data.item.id)}
                        >
                            <AntDesign name="delete" solid></AntDesign>
                        </TouchableOpacity>
                    </View>
                }}
            />

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => { setModalVisible(!modalVisible) }} style={{ zIndex: 99999999999 }}>
                <View style={{
                    height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fffe', margin: 10
                }}>
                    <TextInput placeholder="Enter item" onChangeText={text => setTodo(text)} ></TextInput>
                    <TouchableOpacity onPress={() => {
                        submitTodo(todo);
                        setTodo('');
                        setModalVisible(!modalVisible);
                    }}>
                        <Text>Add Item</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

            <TouchableOpacity style={{
                position: 'absolute', bottom: 0, right: 0, backgroundColor: '#000', height: 40,
                width: 120, borderRadius: 16, justifyContent: 'center', alignItems: 'center'
            }}
                onPress={() => setModalVisible(true)}>
                <Text style={{ fontWeight: '600', fontSize: 16, color: '#fff' }}>+  New Item</Text>
            </TouchableOpacity>
        </View>
    )
}


