import {Text,View, FlatList} from "react-native"
const KingsList = ({kingslist}) =>
{
    
    return(
        <View style={{justifyContent:"center"}}>
        <Text>
            <FlatList 
            data={kingslist} 
            renderItem={ ({item}) => (
                <View>
                    <Text>
                        id: {item.id}, 
                        imię:{item.name}, 
                        data panowania {item.reignDate}
                    </Text>
                </View>
            )}/>

        </Text>
        </View>
    )
}
export default KingsList

  