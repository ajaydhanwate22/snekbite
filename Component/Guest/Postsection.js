import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, ActivityIndicator, TextInput } from 'react-native';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';  // For Add Post icon
import GuestFooternavigation from './GuestFooternavigation';

function Postsection({ navigation }) {
  const { t } = useTranslation();
  
  const [posts, setPosts] = useState([]); // State to store posts
  const [filteredPosts, setFilteredPosts] = useState([]); // State to store filtered posts based on username
  const [loading, setLoading] = useState(true); // Loading state for the API call
  const [searchQuery, setSearchQuery] = useState(''); // State to store search query
  
  // Fetch posts from the API
  useEffect(() => {
    axios.get('https://realrate.store/ajayApi/GuestFetchpost.php')
      .then(response => {
        if (response.data.data) {
          // Simply reverse the order of posts
          const reversedPosts = [...response.data.data].reverse();
          setPosts(reversedPosts); // Set reversed posts
          setFilteredPosts(reversedPosts); // Initialize filtered posts with reversed posts
        }
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching posts: ", error);
        setLoading(false);
      });
  }, []);

  // Handle search input change
  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text) {
      const filtered = posts.filter(post => 
        post.Username.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(posts); // Reset to all posts if search is cleared
    }
  };

  // Add a new post to the top of the posts list
  const handleNewPost = (newPost) => {
    // Simply add the new post at the beginning of the list
    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);
    setFilteredPosts(updatedPosts);
  };

  // Render the posts
  const renderPosts = () => {
    return filteredPosts.map((post, index) => (
      <View key={index} style={{
        backgroundColor: 'white',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        marginVertical: 10,
        marginHorizontal: 20,
        padding: 12, // Reduced padding for smaller card height
        elevation: 3,
      }}>
        {/* Profile section */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
          <Ionicons 
            name="person-circle" // Ionicon's default user icon
            size={45} // Icon size
            color="#093624" // Icon color
            style={{
              marginRight: 12,
            }} 
          />
          <View style={{ flexDirection: 'column' }}>
            <Text style={{
              fontWeight: '700',
              color: '#093624',
              fontSize: 18,
            }}>
              {post.Username}
            </Text>
            <Text style={{
              fontSize: 15,
              color: '#707070',
            }}>
              {post.CurrentLocation}
            </Text>
          </View>
        </View>

        {/* Post Image */}
        {post.photo_url && (
          <View style={{ marginVertical: 10 }}>
            <Image 
              source={{ uri: post.photo_url }} 
              style={{
                width: '100%',
                height: 180, // Further reduced height for the image
                borderRadius: 12,
                resizeMode: 'cover', // Ensures the image fills the container without distortion
              }} 
            />
          </View>
        )}

        {/* Post Description and Date */}
        <Text style={{
          fontSize: 16,
          marginVertical: 5,
          color: '#333',
        }}>
          {post.Description}
        </Text>
        <Text style={{
          fontSize: 14,
          color: '#707070',
          marginVertical: 5,
        }}>
          {post.Date}
        </Text>

        {/* Action Icons (Like, Comment, Share) */}
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 10,
        }}>
          <TouchableOpacity>
            <EvilIcons name="heart" size={30} color="#093624" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="chatbubble-ellipses" size={30} color="#093624" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="share-social" size={30} color="#093624" />
          </TouchableOpacity>
        </View>

        {/* Separator */}
        <View style={{
          width: '100%',
          height: 1,
          backgroundColor: '#093624',
          marginVertical: 20,
        }} />
      </View>
    ));
  };

  return (
    <>
      <ScrollView style={{
        backgroundColor: '#F4F4F4',  // Light background color for the page
      }}>
        {/* Back Button */}
        <TouchableOpacity style={{
          position: 'absolute',
          top: 20,
          left: 15,
        }} onPress={() => navigation.goBack()}>
          <AntDesign name="leftcircle" size={25} color="#093624" />
        </TouchableOpacity>

        <View style={{
          paddingHorizontal: 20,
          alignItems: 'center',
        }}>
          <Text style={{
            fontSize: 28,
            fontWeight: '700',
            lineHeight: 34,
            marginVertical: 20,
            color: '#093624',
            textAlign: 'center',
          }}>
            {t('Recent Posts')}
          </Text>
          <View style={{
            width: '100%',
            height: 1,
            backgroundColor: '#093624',
            borderRadius: 50,
          }} />
        </View>

        {/* Search Icon and Input */}
        <View style={{
          flexDirection: 'row',
          paddingHorizontal: 20,
          paddingTop: 10,
          alignItems: 'center',
        }}>
          <EvilIcons name="search" size={30} color="#093624" />
          <TextInput
            placeholder={t("Search by username")}
            value={searchQuery}
            onChangeText={handleSearch}
            style={{
              marginLeft: 10,
              paddingVertical: 8,
              paddingHorizontal: 15,
              backgroundColor: '#fff',
              borderRadius: 25,
              width: '85%',
              borderWidth: 1,
              borderColor: '#ddd',
            }}
          />
        </View>

        {/* Display posts or loading spinner */}
        {loading ? (
          <ActivityIndicator size="large" color="#093624" />
        ) : (
          renderPosts()
        )}
      </ScrollView>

      {/* Add Post Button (Floating Action Button) */}
      <TouchableOpacity 
        style={{
          position: 'absolute',
          bottom: 100,
          right: 20,
          backgroundColor: '#093624',
          borderRadius: 50,
          padding: 15,
          elevation: 5,
        }}
        onPress={() => navigation.navigate('Guestformscreen', { onNewPost: handleNewPost })} // Pass the handleNewPost function to the AddPost screen
      >
        <MaterialCommunityIcons name="plus-circle" size={40} color="white" />
      </TouchableOpacity>

      <GuestFooternavigation navigation={navigation} />
    </>
  );
}

export default Postsection;
