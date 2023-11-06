# DXC-Encoder-Abigail

## Table of Contents
1. [Introduction](#intro)
2. [Feature](#feature)
3. [Improvement](#improvements)
4. [Languages & Technology & Packages & Frameworks](#languages)
5. [Resources & References](#resources)

***
<a name="intro"></a>
## Introduction

This feature allows users to encode and decode messages. To encode a message, users will have to provide a password and the message they wish to encode. The program will take the length of the password which is to be used as a shift key against a list of characters that are index-bounded. The characters from the message will be matched to this list of characters which will produce a string of indexes. The shift key will be used to amend the indexes and return back a the matching characters from the same character list, producing an encoded message.

The decode process is similar.

***
<a name="feature"></a>
## Feature

### Landing Page
![Screenshot 2023-11-05 at 23 13 29](https://github.com/abigail-143/DXC-Encoder-Abigail/assets/106907059/a7bcfe33-3cfe-4b83-8268-74f5f87923f6)

Users can choose if they wish to encode or decode a message.

### Encoder
![Screenshot 2023-11-05 at 23 14 54](https://github.com/abigail-143/DXC-Encoder-Abigail/assets/106907059/47c0834a-3a4e-4dc8-a6ce-612076781334)
![Screenshot 2023-11-05 at 23 15 00](https://github.com/abigail-143/DXC-Encoder-Abigail/assets/106907059/c0a8093d-ed67-4fb4-b158-2fdec9a2a3bc)

#### Frontend
Users will be able to input a password and their message.

#### Backend
The length of the password provided by the user will be used as the shift key. The message will be compared against a Character List. The Character List holds alphabumerical values which are stored along with a sequalized index. The characters from the message will be compared against this Character List providing a string of indexes. The shift key value will be added to each index which will produce a new string of indexes. The characters for this string of new indexes will come together as the encoded message.

### Decoder
![Screenshot 2023-11-05 at 23 15 13](https://github.com/abigail-143/DXC-Encoder-Abigail/assets/106907059/2b13c650-3d57-477c-929d-2f5a2724d2e9)
![Screenshot 2023-11-05 at 23 15 18](https://github.com/abigail-143/DXC-Encoder-Abigail/assets/106907059/60f74590-bec9-4408-b27e-c81c7043186f)

#### Frontend
Same as the encoder, users will be prompted to provide a password and their message.

#### Backend
The decoding process is similar. Instead of adding the shift key value to the indexes of the message, the shift key value will be subtracted from the indexes instead which should give the original message back to the user.

***
<a name="improvements"></a>
## Improvements

1. Currently the Character List that the messages are compared against is a fixed list. This causes limitations to the encoding and decoding process as any characters included in the message that are not included in the Character List will cause both encoded and subsequently decoded messages to be invalid. Improvements will be made to ensure that new characters included in the message will be added to the Character List as a new data point and sbusequently used to encode and decode the messages.
2. To ensure that messages that were encoded before any expansion of the Character List will still be successfully decoded after the expansion of the Character List, a database can be set up to track when the messages were encoded, which will also keep track of the total Character count of the Character List at that time which is essential in decoding and encoding messages.
3. regex can be applied to the password field when decoding to ensure that the right password is put in and matches, instead of just comparing the password lenght.

***
<a name="languages"></a>
## Languages & Technology & Packages & Frameworks

- HTML
- CSS
- TypeScript
- React (VITE)
- Spring
- Java
- PostgreSQL

***
<a name="resources"></a>
## Resources & References

- [https://www.geeksforgeeks.org/java-program-to-convert-string-to-integer-array/](https://www.geeksforgeeks.org/java-program-to-convert-string-to-integer-array/)
- [https://stackoverflow.com/questions/50900383/how-to-get-parameters-from-requestbody-in-spring-rest-controller-method](https://stackoverflow.com/questions/50900383/how-to-get-parameters-from-requestbody-in-spring-rest-controller-method)
- [https://medium.com/codestorm/custom-json-response-with-responseentity-in-spring-boot-b09e87ab1f0a](https://medium.com/codestorm/custom-json-response-with-responseentity-in-spring-boot-b09e87ab1f0a)
- [https://stackoverflow.com/questions/43323830/react-classname-with-ternary-operator-add-class-null](https://stackoverflow.com/questions/43323830/react-classname-with-ternary-operator-add-class-null)


<p align="right">(<a href="#readme-top">back to top</a>)</p>
