using System.Collections.Generic;

namespace Events_API.Models.Responses
{
    public class ErrorModel
    {
        public bool Success => false;
        public List<string> Messages { get; private set; }

        public ErrorModel(List<string> messages)
        {
            this.Messages = messages ?? new List<string>();
        }

        public ErrorModel(string message)
        {
            this.Messages = new List<string>();

            if (!string.IsNullOrWhiteSpace(message))
            {
                this.Messages.Add(message);
            }
        }
    }
}