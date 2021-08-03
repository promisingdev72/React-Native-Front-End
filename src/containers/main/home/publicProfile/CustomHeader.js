import * as React from 'react';
import { Appbar, Menu, Divider } from 'react-native-paper';
import {useRoute} from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import colors from 'res/colors';
function CustomNavigationBar({ navigation, previous }) {
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    const route = useRoute();
    return (
        <Appbar.Header style={{backgroundColor: "white"}}>
            {previous ? <Appbar.BackAction onPress={navigation.goBack} style={{color: colors.primary}} /> : null}
            <Appbar.Content title={route.name=="EditProfile"?"Edit Profile":route.name} />
            {!previous ? (
            <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={
                <Appbar.Action icon="menu" color={colors.primary} onPress={openMenu} />
                }>
                <Menu.Item onPress={() => {closeMenu(); navigation.navigate("EditProfile", { title: 'Edit Profile' })}} title="Edit Profile" />
                <Menu.Item onPress={() => {closeMenu(); navigation.navigate("Subscription")}} title="Subscription" />
                <Menu.Item onPress={() => {closeMenu(); navigation.navigate("UserSetting")}} title="Settings" />
                <Divider/>
                <Menu.Item onPress={() => {
                    closeMenu(); 
                    navigation.navigate('AppNavigator', { screen: 'Login' }); 
                }} title="Sign Out" />
            </Menu>
            ) : null}
        </Appbar.Header>
    );
}
export default CustomNavigationBar
