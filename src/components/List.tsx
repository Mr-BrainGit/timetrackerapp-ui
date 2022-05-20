import React, { Component, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
	View,
	Text,
	Dimensions,
	StyleSheet,
	TouchableOpacity,
	Platform
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { circleActive, circleInactive, deleteIconColor, itemListText, itemListTextStrike, PRIMARY_COLOR, SECONDAY_COLOR, taskCompleteColor } from '../utils/constants';



const { width } = Dimensions.get('window');
type Props = {
    text: string;
    isCompleted: boolean;
    categoryName: string
    dueDate: string
    onToggleCircle?: () => void;
}
	

const List = (props: Props) => {

  const [isCompleted, setIsCompleted] = useState(props.isCompleted);

  const onToggleCircle = () => {
	props.onToggleCircle && props.onToggleCircle();
	setIsCompleted(!isCompleted);
  };
  return (
    <TouchableOpacity onPressOut={() => {}}>
        <View style={styles.container}>
                <TouchableOpacity onPress={onToggleCircle}>
						<View
							style={[
								styles.circle,
								isCompleted
									? { borderColor: circleActive, backgroundColor: taskCompleteColor }
									: { borderColor: circleInactive }
							]}
						>
                        {isCompleted ? (
                        <Ionicons name={'checkmark-outline'} size={23} color='white' />

                    ) : null}
                        </View>
				</TouchableOpacity>
				<View style={styles.column}>
					
					<Text
					numberOfLines={1}
						style={[
							styles.text,
							isCompleted
								? {
										color: itemListTextStrike,
										textDecorationLine: 'line-through'
								  }
								: { color: itemListText }
						]}
					>
						{props.text}
					</Text>
                    <Text
						style={[
							styles.categoryText,
						]}
					>
						{props.categoryName}
					</Text>
                    <View
						style={[
							styles.dateContainer,
						]}
					>
                    <Ionicons name={'calendar-outline'} size={18} color={SECONDAY_COLOR} />
                    <Text
						style={[
							styles.dateText,
						]}
					>
						{props.dueDate}
					</Text>
					</View>
                    
                    
				</View>
				{isCompleted ? (
					<View style={styles.button}>
						<TouchableOpacity onPressOut={() => {}}>
                            <Ionicons name={'trash-outline'} size={24} color={deleteIconColor} />
						</TouchableOpacity>
					</View>
				) : null}
                
            
	    </View>
        
    </TouchableOpacity>
    
  )
}

export default List;


const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		borderRadius: 5,
		backgroundColor: 'white',
		height: width / 5,
		alignItems: 'center',
		justifyContent: 'flex-start',
		marginTop: 5,
        borderWidth: 1,
        borderColor: "#b8b8b8",
		marginBottom: 10,
        paddingTop: 10
		
	},
    dateContainer: {
        
        flexDirection: 'row',
        justifyContent: 'flex-start',


    },
	column: {
		width: width / 1.4,
        
	},
    row: {
		flexDirection: 'column',
		alignItems: 'center',
		width: width / 1.2,
        
	},
	text: {
		fontWeight: '500',
		fontSize: 16,
		marginTop: -10
	},
    categoryText: {
		fontWeight: '200',
		fontSize: 16,
	},
    dateText: {
		fontWeight: '200',
		fontSize: 14,
        padding: 2,
        paddingLeft: 5
	},
	circle: {
		width: 30,
		height: 30,
		borderRadius: 15,
		borderWidth: 3,
		margin: 10,
        marginTop: -5
        
	},
	button: {
		marginTop: -10,
        
	}
});
