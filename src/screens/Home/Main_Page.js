import React, { useState,useEffect, } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, TextInput,   Dimensions,} from 'react-native';












export default function Main_Page() {

    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const styles = isDarkTheme ? styles_dark : styles_white;





    return (
        <View style={styles.container }>

<View style={styles.container_Calendar}>
    <Text style={styles.text_cont_calendar}>
        Calendar
    </Text>
</View>

      <View style={styles.container_Map_reported}>
          <Text style={styles.text_cont_map_reported}>
              Map Reported
          </Text>
      </View>

            <View style={styles.container_settings}>
                <Text style={styles.text_cont_settings}>
                    Settings
                </Text>
            </View>

            <View style={styles.container_Profile}>
                <Text style={styles.text_cont_profile}>
                    Profile
                </Text>
            </View>

            <View style={styles.container_Todo_Page}>
                <Text style={styles.text_cont_todo}>
                    Add Reported
                </Text>
            </View>


        </View>
    );
}

// DARK THEME
const styles_dark = StyleSheet.create({


});

// LIGHT THEME
const styles_white = StyleSheet.create({

    container: {},
    container_Calendar:{

    },
    text_cont_calendar:{

    },
    container_Map_reported:{

    },
    text_cont_map_reported:{

    },
    container_Profile:{

    },
    container_settings:{

    },
    text_cont_settings:{

    },
    text_cont_profile:{

    },
    container_Todo_Page:{

    },
    text_cont_todo:{

    },
});
