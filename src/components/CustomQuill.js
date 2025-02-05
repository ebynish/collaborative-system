import React, { useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // Import Quill styles

const CustomQuill = ({ value, onChange }) => {
  const quillRef = useRef(null);
  const editorRef = useRef(null);

  useEffect(() => {
    if (quillRef.current && !editorRef.current) {
      const quill = new Quill(quillRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image'],
            ['clean'],
          ],
        },
      });

      editorRef.current = quill;

      // Update editor content when `value` changes
      if (value !== quill.root.innerHTML) {
        quill.root.innerHTML = value; // Directly set HTML content
      }

      quill.on('text-change', () => {
        onChange(quill.root.innerHTML); // Send updated content to parent
      });

    //   return () => {
    //     // Clean up the editor instance when the component is unmounted
    //     if (editorRef.current) {
    //       editorRef.current = null;
    //     }
    //   };
    }
  }, [onChange, value]); // Only re-run when `value` or `onChange` changes

  return <div ref={quillRef} style={{ height: '200px' }} />;
};

export default CustomQuill;
