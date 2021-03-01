import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity,Image } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [clearButtonShow,setClearButtonShow] = useState(false) 
  const [isAddMode, setIsAddMode] = useState(false);

  const goalInputHandler = enteredText => {
    setClearButtonShow(enteredText.length>0 ? true:false);  
    setIsAddMode(enteredText.length>0 ? true:false);
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter a goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        {clearButtonShow && <TouchableOpacity
            style={styles.closeButtonParent}
            onPress={() => setEnteredGoal('')}>
            <Image              
                style={styles.closeButton}
                source={require('../assets/close.png')}
            />
        </TouchableOpacity>}
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler}  disabled={!isAddMode}/>
          </View>
        </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
        flexDirection: 'row',
        paddingTop:15,
      marginBottom:15
  },
  input: {
    width: '85%',
    borderColor: 'black',
    paddingLeft:10,
    borderWidth: 1
  },
  buttonContainer: {
  },
  button: {
    width: '20%',
    paddingLeft:'5%'
  },
  closeButtonParent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    marginLeft:-30

  },
  closeButton: {
    height: 25,
    width: 25,
  },
});

export default GoalInput;
