import React, { useContext } from 'react'
import { Text, View, Button } from 'react-native'
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme';

export const ContactsScreen = () => {

    const {authState, signIn} = useContext(AuthContext);
    const { isLoggedIn } = authState;
    
    return (
        <View style={ styles.globalMargin}>
            <Text style={styles.title}>ContactsScreen</Text>

            {
                !isLoggedIn && 
                <Button
                    title="SignIn"
                    onPress={ signIn}
                />
            }

        </View>
    )
}
