import {Text,View, Button} from "react-native"

const KingChild = ({onDataReceiver}) => {
    function sendChildToApp(){
        const data = "I'am King child";
        onDataReceiver(data)
    }

    return(
        <View>
        <Text>Jestem kingchild</Text>
        <Button title="Wyślij dziecko do App.js"
        onPress={sendChildToApp}
        />
        </View>
    )
}
export default KingChild