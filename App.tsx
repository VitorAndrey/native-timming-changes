import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, StatusBar, BackHandler} from 'react-native';

export default function App() {
  const [color, setColor] = useState<string>();
  const [message, setMessage] = useState<string>('');
  const [upTime, setUpTime] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setUpTime(prevState => prevState + 1);
    }, 1000);
  }, [upTime]);

  useEffect(() => {
    if (upTime > 5) {
      setColor('yellow');
      setMessage('Você está esperando há mais de 5 segundos');
    }
    if (upTime > 10) {
      setColor('orange');
      setMessage('Você está esperando há mais de 10 segundos');
    }
    if (upTime > 15) {
      setColor('red');
      setMessage(
        'Obrigado por esperar mais de 15 segundos.\n"Cada minuto dedicado ao aprendizado e crescimento pessoal é um passo na direção dos seus sonhos. Então, que tal aproveitar cada momento para construir um futuro incrível?"',
      );
    }
    if (upTime > 25) {
      BackHandler.exitApp();
    }
  }, [upTime]);

  const backgroundColor = {
    backgroundColor: color,
  };

  return (
    <View style={[styles.container, backgroundColor]}>
      <StatusBar />
      <Text style={styles.counterText}>
        A aplicação está rodando há {upTime} segundos
      </Text>
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>{message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  messageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterText: {
    fontSize: 18,
  },
  messageText: {
    fontSize: 22,
  },
});
