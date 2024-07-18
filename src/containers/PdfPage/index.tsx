import { Button } from '@mui/material';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import Modal from 'react-modal';

export const PdfPage = () => {
  // useEffect(() => {
  //   Modal?.setAppElement('#root');
  // }, []);

  const [content, setContent] = useState({
    name: 'Luciano Triftong',
    contactInfo: 'Amsterdam | 0619230320 | add_your_email@gmail.com',
    date: 'July 13, 2024',
    recipient: '[X company]',
    position: 'RE: Attorney at law',
    body: `I am enthusiastic to apply for the Attorney at law position at [X company]. With over 10 years of experience in [job description] and a strong background in [skill 1 and skill 2], I am confident in my ability to contribute to your dynamic Law team.\n\nIn my current role at [X company], I have helped clients with their immigration issues in all states in the US and in different countries.......................................................................................................
    . ....................................................................................................\n\nI am eager to bring my technical skills and problem-solving abilities to [X company]. Thank you for considering my application. I look forward to discussing how I can contribute to your team.`,
    closing: 'Sincerely, your name',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentField, setCurrentField] = useState('');
  const [currentValue, setCurrentValue] = useState('');

  console.log({ isModalOpen });

  const handleExportToPDF = () => {
    const input = document.getElementById('preview');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('cover_letter.pdf');
    });
  };

  const handleEditClick = (field) => {
    setCurrentField(field);
    setCurrentValue(content[field]);
    setIsModalOpen(true);
  };

  const handleSave = () => {
    setContent((prevContent) => ({
      ...prevContent,
      [currentField]: currentValue,
    }));
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    setCurrentValue(e.target.value);
  };

  return (
    <div className='pdf-page'>
      <Button id='download-btn' variant='outlined' color='primary' size='large' onClick={handleExportToPDF}>
        Download PDF
      </Button>
      <div id='preview' className='preview-container'>
        <div className='header'>
          <HoverableText id='name' multiline={true} text={`${content.name}`} onEdit={() => handleEditClick('name')} />
          <HoverableText id='info' multiline={true} text={`${content.contactInfo}`} onEdit={() => handleEditClick('contactInfo')} />
        </div>
        <div className='body'>
          <HoverableText id='date' text={content.date} onEdit={() => handleEditClick('date')} multiline={false} />
          <HoverableText id='recipient' multiline={true} text={content.recipient} onEdit={() => handleEditClick('recipient')} />
          <HoverableText id='position' multiline={true} text={content.position} onEdit={() => handleEditClick('position')} />
          <HoverableText id='body' multiline={true} text={content.body} onEdit={() => handleEditClick('body')} />
        </div>
        <div className='footer'>
          <HoverableText id='closing' multiline={true} text={content.closing} onEdit={() => handleEditClick('closing')} />
        </div>
      </div>

      <Modal
        appElement={document.getElementById('root') as any}
        isOpen={isModalOpen}
        onRequestClose={handleCancel}
        contentLabel='Edit Text'
        className={currentField === 'body' ? 'large-modal' : 'small-modal'}
        overlayClassName='overlay'
      >
        <h2>
          Edit{' '}
          {currentField === 'closing'
            ? 'Signature'
            : currentField === 'name'
            ? 'Name'
            : currentField === 'contactInfo'
            ? 'Address'
            : currentField === 'date'
            ? 'Date'
            : currentField === 'recipient'
            ? 'Subject'
            : currentField === 'position'
            ? 'Company name'
            : 'Description'}
        </h2>
        {currentField === 'body' || currentField === 'closing' ? (
          <textarea style={currentField === 'closing' ? { height: '100px' } : { height: '480px' }} value={currentValue} onChange={handleChange} />
        ) : (
          <input type='text' value={currentValue} onChange={handleChange} />
        )}
        <div className='modal-buttons'>
          <Button variant='outlined' color='primary' size='large' onClick={handleSave}>
            Save
          </Button>
          <Button variant='outlined' color='secondary' size='large' onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  );
};

const HoverableText = ({ text, onEdit, multiline, id }) => {
  return (
    <div id={id} className='hoverable-text-container' onClick={onEdit}>
      <FaEdit className='edit-icon' />
      <span id='first-span'>
        {multiline
          ? text.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))
          : text}
      </span>
    </div>
  );
};
