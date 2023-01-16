import { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles';
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';

export function Home() {
  const [participants, setParticipants] = useState(['Felipe', 'Gabriel', 'Beatriz']);
  const [participantName, setParticipantName] = useState('');
  const nowDate = format(Date.now(), "EEEE, dd 'de' MMMM 'de' Y", { locale: pt });

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert('Participante existente!', 'Já existe um participante com este nome.');
    }
    if (participantName == '') {
      return Alert.alert('Informe um nome!', 'Você precisa informar o nome do participante.');
    }

    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName('');
  }

  function handleParticipantDelete(name: string) {
    Alert.alert('Remover', 'Deseja realmente remover o participante ' + name + '?', [
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name)),
      },
      {
        text: 'Não',
        style: 'cancel',
      }
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Presença no Evento</Text>
      <Text style={styles.eventDate}>{nowDate}</Text>
      <View style={styles.formParticipant}>
        <TextInput
          style={styles.eventInput}
          onChangeText={setParticipantName}
          value={participantName}
          placeholder="Nome do participante..."
          placeholderTextColor="#888888"
        />
        <TouchableOpacity style={styles.buttonSuccess} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={participants}
        keyExtractor={item => item}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ainda não existem participantes no evento. Adicione um novo participante!
          </Text>
        )}
        renderItem={({ item }) => (
          <Participant key={item} name={item} onRemove={() => handleParticipantDelete(item)} />
        )}
      />
    </View>
  );
}