import { useState } from 'react';
import SendIcon from '../../assets/hugeicons_sent-02.svg';

interface Comment {
  id: string;
  name: string;
  text: string;
  date: string;
  avatar: string;
}

interface CommentsSectionProps {
  comments: Comment[];
}

export const CommentsSection = ({ comments }: CommentsSectionProps) => {
  const [newComment, setNewComment] = useState('');

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 1);
  };

  return (
    <div className="space-y-4">
      <h3
        style={{
          color: '#1D3557',
          fontWeight: 700,
          fontSize: '16px',
          fontFamily: 'Cairo, sans-serif',
        }}
      >
        Comments
      </h3>

      <div className="space-y-3">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="bg-white rounded-lg border p-4"
            style={{
              borderColor: '#E0E8ED',
              borderWidth: '1px',
              borderRadius: '10px',
            }}
          >
            <div className="flex items-start gap-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: '#E0E8ED',
                  color: '#8597A8',
                  fontWeight: 500,
                  fontSize: '16px',
                  fontFamily: 'Cairo, sans-serif',
                }}
              >
                {getInitials(comment.name)}
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <div
                    style={{
                      color: '#1D3557',
                      fontWeight: 700,
                      fontSize: '14px',
                      fontFamily: 'Cairo, sans-serif',
                    }}
                  >
                    {comment.name}
                  </div>
                  <div
                    style={{
                      color: '#1D3557',
                      fontWeight: 400,
                      fontSize: '10px',
                      fontFamily: 'Cairo, sans-serif',
                    }}
                  >
                    {comment.date}
                  </div>
                </div>
                <p
                  style={{
                    color: '#1D3557',
                    fontWeight: 400,
                    fontSize: '14px',
                    fontFamily: 'Cairo, sans-serif',
                    lineHeight: '1.5',
                  }}
                >
                  {comment.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}

          className="w-full p-4 resize-none"
          style={{
            border: '1px solid #E0E8ED',
            borderRadius: '10px',
            minHeight: '120px',
            fontFamily: 'Cairo, sans-serif',
            fontSize: '14px',
            color: '#1D3557',
          }}
        />

        <button
          className="flex items-center gap-2 px-4 py-2 rounded-lg"
          style={{
            backgroundColor: '#1D3557',
            color: '#FFFFFF',
            fontWeight: 400,
            fontSize: '13px',
            fontFamily: 'Cairo, sans-serif',
          }}
        >
          <img src={SendIcon} alt="Send" className="w-4 h-4" style={{ filter: 'brightness(0) invert(1)' }} />
          Post Comment
        </button>
      </div>
    </div>
  );
};
