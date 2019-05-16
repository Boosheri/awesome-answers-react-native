import React, { Component } from "react";
import { View, TouchableOpacity, ScrollView, Text } from "react-native";


const BASE_URL=`http://192.168.1.2:3000/api/v1`;

export class QuestionIndexScreen extends Component {
  state = {
    activeQuestion: {},
    questions: []
  };

  async getQuestions() {
    const res = await fetch(`${BASE_URL}/questions`);
    const data = await res.json();
    this.setState({
      questions: data
    });
  }

  async getQuestion(id) {
    const res = await fetch(`${BASE_URL}/questions/${id}`);
    const data = await res.json();

    this.setState({
      activeQuestion: data
    });
  }

  setActiveQuestion = async id => {
    this.getQuestion(id);
  };

  async componentDidMount() {
    this.getQuestions();
  }

  render() {
    const { activeQuestion, questions } = this.state;

    return (
      <ScrollView>
        {questions.map(question => (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => this.setActiveQuestion(question.id)}
            key={question.id}
          >
            <View
              style={{
                padding: 10,
                ...(activeQuestion.id === question.id
                  ? { backgroundColor: "slategrey" }
                  : {})
              }}
            >
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: "500",
                  ...(activeQuestion.id === question.id
                    ? { color: "white" }
                    : {})
                }}
                numberOfLines={2}
              >
                {question.title}
              </Text>
            </View>
            {activeQuestion.id === question.id ? (
              <View
                style={{
                  padding: 20,
                  backgroundColor: "gainsboro"
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "darkgrey"
                  }}
                >
                  {activeQuestion.body}
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "600",
                    color: "darkgrey"
                  }}
                >
                  By {activeQuestion.author.full_name}
                </Text>
              </View>
            ) : null}
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
}
