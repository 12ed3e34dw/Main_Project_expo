import React, { useState,useEffect, } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, TextInput,   Dimensions,} from 'react-native';
import Todo_Page from "../../components/Todo_List/Todo_Page";

import {darkStyles,lightStyles} from '/src/styles/Main_styles';


import foto from "../../assets/foto_calendar.png";
import foto_1 from "../../assets/foto_Map.png";
import foto_2 from "../../assets/foto_profile.png";
import foto_3 from "../../assets/foto_add.png";
import foto_4 from "../../assets/foto_settings.png";




export default function Main_Page() {

    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const styles = isDarkTheme ? darkStyles : lightStyles;


    return (
        <View style={styles.container }>
<TouchableOpacity onPress={() => {}}>
<View style={styles.container_Calendar}>
    <Image source={foto} style={styles.image} />
    <Text style={styles.text_cont_calendar}>
        Calendar
    </Text>
</View>
</TouchableOpacity>

<TouchableOpacity onPress={() => {}}>
      <View style={styles.container_Map_reported}>
          <Image source={foto_1} style={styles.image_1} />
          <Text style={styles.text_cont_map_reported}>
              Map Reported
          </Text>
      </View>
</TouchableOpacity>

            <TouchableOpacity onPress={() => {}}>
            <View style={styles.container_settings}>
                <Image source={foto_4} style={styles.image_4} />
                <Text style={styles.text_cont_settings}>
                    Settings
                </Text>
            </View>
</TouchableOpacity>


<TouchableOpacity onPress={() => {}}>
            <View style={styles.container_Profile}>
                <Image source={foto_2} style={styles.image_2} />
                <Text style={styles.text_cont_profile}>
                    Profile
                </Text>
            </View>
</TouchableOpacity>

<TouchableOpacity onPress={() => {}}>
            <View style={styles.container_Todo_Page}>
                <Image source={foto_3} style={styles.image_3} />
                <Text style={styles.text_cont_todo}>
                    Add Reported
                </Text>
            </View>
</TouchableOpacity>
        </View>
    );
}




