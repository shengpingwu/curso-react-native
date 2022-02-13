import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme';

export const AlbumsScreen = () => {

    const {authState, signOut} = useContext(AuthContext);
    const { isLoggedIn } = authState;

    return (
        <View style={ styles.globalMargin}>
            <Text style={styles.title}>AlbumsScreen</Text>
            {
                isLoggedIn && 
                <Button
                    title="SignOut"
                    onPress={ signOut}
                />
            }
        </View>
    )
}