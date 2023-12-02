import React from 'react';
import { Text, StyleSheet, Button} from 'react-native';


 const ChuckNorrisFact = ({  }) => {
    const [fact, setFact] = React.useState('Loading...');
    const fetchFact = async () => {
        try {

        
        const response = await fetch('https://api.chucknorris.io/jokes/random')
        const decoded = await response.json();
        const newFact = decoded.value;

        setFact(newFact);
        } catch (error) {
            console.log(error);
        }

    }

    React.useEffect(() => {
        fetchFact();
         
    },[]);

    const handleRefreshPress = () => {
        fetchFact();
    }
    return (
        <>
            <Text style={styles.text}>{fact}</Text>
            
            <Button title="Refresh" onPress={handleRefreshPress} />
        </>
    );

}

const styles = StyleSheet.create({
    text: {
        fontSize: 28,      
        marginTop: 60,
        textAlign: 'center',
    },
    button: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        border: '1px solid black',
    },
});


export default ChuckNorrisFact;