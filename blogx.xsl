<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html> 
<body>
  <h2>Login</h2>
  <table border="1" style="border-collapse:collapse;">
    <tr bgcolor="#9acd32">
      <th style="text-align:left">user_id</th>
      <th style="text-align:left">users</th>
      <th style="text_align:left">password</th>
      <th style="text-align:left">email_id</th>
    </tr>
    <xsl:for-each select="catalog/cd">
    <tr>
      <td><xsl:value-of select="user_id"/></td>
      <td><xsl:value-of select="users"/></td>
      <td><xsl:value-of select="password"/></td>
      <td><xsl:value-of select="email_id"/></td>
    </tr>
    </xsl:for-each>
  </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>