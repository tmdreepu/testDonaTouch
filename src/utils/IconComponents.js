import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';

export const IconComponentCheck = ({ color, size }) => (
    <FontAwesome name="check-square-o" size={size || 24} color={color || "black"} />
)

export const IconComponentSquareBox = ({ color, size }) => (
    <FontAwesome name="square-o" size={size || 24} color={color || "black"} />
)

export const IconComponentInfo = ({ color, size }) => (
    <Entypo name="info-with-circle" size={size || 24} color={color || "black"} />
)


