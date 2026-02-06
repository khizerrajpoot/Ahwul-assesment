import { useState } from 'react';
import SendIcon from '../../assets/hugeicons_sent-02.svg';
import type { Comment } from '../../types';

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
      <h3 className="text-[16px] font-bold text-[#1D3557]" style={{ fontFamily: 'Cairo, sans-serif' }}>
        Comments
      </h3>

      <div className="space-y-3">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="bg-white rounded-[10px] border border-[#E0E8ED] p-4"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-[#E0E8ED] text-[#8597A8] font-medium text-[16px]" style={{ fontFamily: 'Cairo, sans-serif' }}>
                {getInitials(comment.name)}
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <div className="text-[14px] font-bold text-[#1D3557]" style={{ fontFamily: 'Cairo, sans-serif' }}>
                    {comment.name}
                  </div>
                  <div className="text-[10px] font-normal text-[#1D3557]" style={{ fontFamily: 'Cairo, sans-serif' }}>
                    {comment.date}
                  </div>
                </div>
                <p className="text-[14px] font-normal text-[#1D3557] leading-[1.5]" style={{ fontFamily: 'Cairo, sans-serif' }}>
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
          className="w-full p-4 resize-none border border-[#E0E8ED] rounded-[10px] min-h-[120px] text-[14px] text-[#1D3557]"
          style={{ fontFamily: 'Cairo, sans-serif' }}
        />

        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1D3557] text-white font-normal text-[13px]" style={{ fontFamily: 'Cairo, sans-serif' }}>
          <img src={SendIcon} alt="Send" className="w-4 h-4 brightness-0 invert" />
          Post Comment
        </button>
      </div>
    </div>
  );
};
