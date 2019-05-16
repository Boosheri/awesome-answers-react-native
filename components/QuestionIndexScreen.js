import React, { Component } from "react";
import { View, TouchableOpacity, ScrollView, Text } from "react-native";

const BASE_URL=`http://192.168.1.2:3000/api/v1`;

export class QuestionIndexScreen extends Component {
    state = {
      activeQuestionId: null,
      questions: []
    };
  
    async componentDidMount() {
      const res = await fetch(`${BASE_URL}/questions`);
      const data = await res.json();
      this.setState({
        questions: data
      });
    }
  
    render() {
      const { activeQuestionId, questions } = this.state;
  
      return (
        <ScrollView>
          {questions.map(question => (
            <TouchableOpacity
              activeOpacity={0.5}
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                ...(activeQuestionId === question.id
                  ? { backgroundColor: "slategrey" }
                  : {})
              }}
              onPress={() => {
                this.setState({
                  activeQuestionId: question.id
                });
              }}
              key={question.id}
            >
              <Text
                style={{
                  fontSize: 25,
                  ...(activeQuestionId === question.id ? { color: "white" } : {})
                }}
                numberOfLines={2}
              >
                {question.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      );
    }
  }
  