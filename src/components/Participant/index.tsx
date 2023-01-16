import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type ParticipantProps = {
  name: string;
  onRemove: () => void;
}

export function Participant({ name, onRemove }: ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.participantName}>
        {name}
      </Text>
      <TouchableOpacity style={styles.buttonDanger} onPress={onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}