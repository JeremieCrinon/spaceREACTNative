import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import axios from 'axios';
import { WebView } from 'react-native-webview';

const WpPosts = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('https://jeremie.subotai.fr/wp-json/wp/v2/posts')
      .then(response => {
        setArticles(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
      });
  }, []);

  return (
    <ScrollView>
      {articles.map((article, index) => (
        <View key={index}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>{article.title.rendered}</Text>
          <WebView
            originWhitelist={['*']}
            source={{ html: article.content.rendered }}
            style={{height: 200}} // Ajustez la hauteur selon vos besoins
          />
        </View>
      ))}
    </ScrollView>
  );
}

export default WpPosts;