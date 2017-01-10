module.exports = function doQuery(query, callback)
{ 
    try
    {
        connection.query(query, function(err, rows, fields){
            if(err)
                res.json(err);
            else
            {   
                if(callback)
                    callback(rows);
                res.json(rows);
            }
        });
    }
    catch (e)
    {
        printQueryException(e, query);
        res.json([]);
    }
}