import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Home = (props) => {
  const username = props.route.params.username;
  const email = props.route.params.email;
  const password = props.route.params.password;
  const statusMember = props.route.params.statusMember;
  console.log(props);
  const [dataBuku, setDataBuku] = useState([
    {
      judul: "Reborn Rich",
      image: require("../assets/rr.jpg"),
      author: "Total 16 Episode",
    },
    {
      judul: "Connect",
      image: require("../assets/connect.jpeg"),
      author: "Total 6 Episode",
    },
    {
      judul: "Big Mouth",
      image: require("../assets/bg.jpeg"),
      author: "Total 16 Episode",
    },
    {
      judul: "Revenge Of Others",
      image: require("../assets/roo.jpeg"),
      author: "Total 12 Episode",
    },
    {
      judul: "Red Balloon",
      image: require("../assets/redbalon.jpg"),
      author: "Total 20 Episode",
    },
    {
      judul: "The Glory",
      image: require("../assets/glory.jpg"),
      author: "Total 12 Episode",
    },
  ]);

  const [dataBuku1, setDataBuku1] = useState([
    {
      judul: "Business Proposal",
      image: require("../assets/buspro.jpg"),
      author: "Total 12 Epsisode",
    },
    {
      judul: "What's Wrong With Secretary Kim?",
      image: require("../assets/kim.jpg"),
      author: "Total 16 Episode",
    },
    {
      judul: "WWW",
      image: require("../assets/www.jpeg"),
      author: "Total 16 Episode",
    },
    {
      judul: "Her Private Life",
      image: require("../assets/private.jpg"),
      author: "Total 16 Episode",
    },
    {
      judul: "Forecasting Love and Weather",
      image: require("../assets/bmkg.jpg"),
      author: "Total 16 Episode",
    },
    {
      judul: "Strong Girl Bong-Soon",
      image: require("../assets/strong.jpg"),
      author: "Total 16 Episode",
    },
  ]);

  const [dataBuku2, setDataBuku2] = useState([
    {
      judul: "Mr. Queen",
      image: require("../assets/queen.jpg"),
      author: "Total 20 Episode",
    },
    {
      judul: "Rooftop Prince",
      image: require("../assets/prince.jpg"),
      author: "Total 20 Episode",
    },
    {
      judul: "The Red Sleeve",
      image: require("../assets/red.jpg"),
      author: "Total 17 Episode",
    },
    {
      judul: "Alchemy Of Souls",
      image: require("../assets/of.jpg"),
      author: "Total 20 Episode",
    },
    {
      judul: "Mr. Sunshine",
      image: require("../assets/sunshine.jpg"),
      author: "Total 24 Episode",
    },
    {
      judul: "My Sassy Girl",
      image: require("../assets/sassy.jpg"),
      author: "Total 16 Episode",
    },
  ]);

  const [daftarRekomendasi, setDaftarRekomendasi] = useState([
    {
      // judul: 'Buku Pemrograman terbaik',
      // deskripsi: 'buku pemrograman ini sangan recomended untuk dibaca, banyak hal bermanfaat didalamnya. Ga percaya? Coba aja.',
      image: require("../assets/rich.jpg"),
    },
    {
      // judul: 'Buku Non-Fiksi terbaik',
      // deskripsi: 'buku non-fiksi ini sangat nyaman untuk dibaca saat kamu punya waktu senggang',
      image: require("../assets/balon.jpg"),
    },
    {
      // judul: 'Buku Komedi terbaik',
      // deskripsi: 'buku komedi pengocok perut acumalaka',
      image: require("../assets/cc.jpg"),
    },
  ]);

  const handlePress = () => {
    console.log("Button pressed");
    props.navigation.navigate("DetailDrakor", {
      username: username,
      email: email,
      password: password,
      statusMember: statusMember,
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <StatusBar backgroundColor="#D6540B" barStyle="light-content" />
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: "#D6540B",
            borderBottomLeftRadius: 30,
            paddingBottom: 10,
            elevation: 5,
          }}
        >
          <View style={{ marginHorizontal: 20, marginTop: 10 }}>
            <Text style={{ color: "#FFFFFF" }}>WELCOME!</Text>
            <Text
              style={{ fontSize: 18, fontWeight: "bold", color: "#FFFFFF" }}
            >
              JINJJA APPS
            </Text>
          </View>

          <View style={{ marginLeft: 20, marginTop: 20 }}>
            <FlatList
              data={daftarRekomendasi}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{
                    backgroundColor: "#FFFFFF",

                    marginTop: 10,
                    flexDirection: "row",
                    marginRight: 20,
                    elevation: 3,
                    padding: 10,
                    marginBottom: 10,
                    borderRadius: 5,
                  }}
                >
                  {/* <View style={{marginRight: 10, width: 200}}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 20,
                        color: 'white',
                      }}>
                      {item.judul}
                    </Text>
                    <Text style={{fontSize: 14}}>{item.deskripsi}</Text>
                  </View> */}
                  <View>
                    <Image
                      source={item.image}
                      style={{ width: 300, height: 150, borderRadius: 5 }}
                      resizeMode="contain"
                    />
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>

        <View style={{ marginLeft: 20, marginTop: 20 }}>
          <View style={{ flexDirection: "row", marginRight: 10 }}>
            <Text style={{ fontWeight: "bold", color: "white" }}>
              Trend Now
            </Text>
          </View>
          <FlatList
            data={dataBuku}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={handlePress}
                style={{
                  width: 150,
                  backgroundColor: "#D6540B",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: 10,
                  borderRadius: 10,
                  padding: 10,
                }}
              >
                <Image
                  source={item.image}
                  style={{ width: 130, height: 150, borderRadius: 5 }}
                  resizeMode="contain"
                />
                <Text style={{ fontWeight: "bold" }}>{item.judul}</Text>
                <Text style={{ fontSize: 14 }}>{item.author}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        <View style={{ marginLeft: 20, marginTop: 20, marginBottom: 20 }}>
          <View style={{ flexDirection: "row", marginRight: 10 }}>
            <Text style={{ fontWeight: "bold", color: "white" }}>
              Office Romance
            </Text>
          </View>
          <FlatList
            data={dataBuku1}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  width: 150,
                  backgroundColor: "#D6540B",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: 10,
                  borderRadius: 10,
                  padding: 10,
                }}
              >
                <Image
                  source={item.image}
                  style={{ width: 130, height: 150, borderRadius: 5 }}
                  resizeMode="contain"
                />
                <Text style={{ fontWeight: "bold" }}>{item.judul}</Text>
                <Text style={{ fontSize: 14 }}>{item.author}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        <View style={{ marginLeft: 20, marginBottom: 20 }}>
          <View style={{ flexDirection: "row", marginRight: 10 }}>
            <Text style={{ fontWeight: "bold", color: "white" }}>Royal</Text>
          </View>
          <FlatList
            data={dataBuku2}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  width: 150,
                  backgroundColor: "#D6540B",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: 10,
                  borderRadius: 10,
                  padding: 10,
                }}
              >
                <Image
                  source={item.image}
                  style={{ width: 130, height: 150, borderRadius: 5 }}
                  resizeMode="contain"
                />
                <Text style={{ fontWeight: "bold" }}>{item.judul}</Text>
                <Text style={{ fontSize: 14 }}>{item.author}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
