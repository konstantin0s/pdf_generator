import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

    body {
    font-family: Arial, sans-serif;
    background-color: ${({ theme }) => (theme?.greyMode ? '#f6f5f0' : '#fff')} !important;
    color: ${({ theme }) => (theme?.greyMode ? '##9c92b0' : '#333')} !important;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

.pdf-page {
  font-family: Arial, sans-serif;
  max-width: 800px;
  padding: 20px;
  height: 100%;
  min-height: 100%;
  position: relative;
  }

.preview-container {
  padding: 20px;
  border: none;
}

.preview-container .header,
.preview-container .body,
.preview-container .footer {
  margin-bottom: 20px;
  margin-top: 70px;
  width: 100%;
}


.preview-container .header {
    margin-bottom: 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-end;
    width: 100%;
    font-weight: bold;
    color: #7aadd9;
    border: 1px #333;
}

.header #name, .header #info {
  font-size: 28px;
  position: relative;
  width: 70%;
  padding: 5px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-end;
  justify-content: flex-end;
  align-items: flex-end;
}

.header #info {
   font-size: 14px;
}

.preview-container .body {
  font-size: 16px;
}

.hoverable-text-container {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease;
  text-align: left;
   padding: 10px;

}

.hoverable-text-container:hover {
  border: 1px solid #286e36;
  border-radius: 5px;
  background-color: #f0f0f0; /* Light background on hover for better visibility */
}
.body {
   margin-top: 60px;
}

#body #first-span {
  margin-left: 28px;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: flex-start;
  align-items: flex-start;
}

#closing {
  margin-bottom: 100px;
}

#closing span {
  margin-left: 13px;
  position: relative;
}

 #date, #recipient, #position  {
   margin-bottom: 20px;
   position: relative;
}

 #date span, #recipient span, #position span  {
    margin-left: 28px;
    position: relative;
}

 #recipient span, #position span  {
    margin-left: 13px;
    position: relative;
}



.hoverable-text-container:hover .edit-icon {
  visibility: visible;
  opacity: 1;
}

.edit-icon {
  visibility: hidden;
  opacity: 0;
  margin-left: 10px; /* Space between text and icon */
  color: gray;
  transition: visibility 0s, opacity 0.3s ease;
}



.small-modal {
   background: white;
  border-radius: 10px;
  padding: 20px;
  width: 65%;
  height:auto;
  min-height: 30%;
  margin: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  }

.large-modal {
 background: white;
  border-radius: 10px;
  padding: 20px;
  width: 65%;
  height:auto;
  min-height: 50%;
  margin: auto;
  position: relative;
  display: flex;
  flex-direction: column;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
}

textarea {
  width: 100%;
  height: 100px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

#download-btn {
    position: relative;
    margin-bottom: 20px;
    float: left;
    top: 31px;
    left: -81px;
}

.modal-header {
  margin-bottom: 20px;
  font-size: 1.5rem;
}

.modal-buttons {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.modal-buttons button {
  margin: 10px;
}

textarea {
  position: relative;
  min-width: 80%;
  min-height: 60%;
  height: 480px;
}

textarea, input {
 margin: 10px 0px 10px 0px;
 position: relative;
 top: 40px;
 margin-bottom: 80px;
}

input {
 height: 40px;
}
`;

export const theme = {
  colors: {
    // primary: '#3498db',
    // secondary: '#2ecc71',
    // background: '#f5f5f5',
    text: '#333',
  },
};
