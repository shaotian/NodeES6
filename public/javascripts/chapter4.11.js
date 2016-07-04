/**
 * Created by shaotian on 16-7-1.
 */
var template = `
<ul>
    <% for(var i = 0; i < data.supplies.length; i++) {%>
        <li><%= data.supplies[i] %></li>
     <% } %>
</ul>
`;
